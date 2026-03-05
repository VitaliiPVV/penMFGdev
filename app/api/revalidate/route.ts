import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

const REVALIDATION_TOKEN = process.env.REVALIDATION_TOKEN;

export async function POST(request: NextRequest) {
  try {
    const headers: Record<string, string> = {};
    request.headers.forEach((value, key) => {
      headers[key] = value;
    });

    const authHeader = request.headers.get('authorization');
    const token = authHeader?.replace('Bearer ', '').trim();

    if (!token || token !== REVALIDATION_TOKEN) {
      console.error('❌ Token validation failed!');

      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { model, entry } = body;

    const modelName = model?.includes('::') ? model.split('::')[1].split('.')[0] : model;
    console.log('[Revalidation] Model name:', modelName);

    switch (modelName) {
      case 'article':
        // Revalidate blog list page
        revalidatePath('/blog', 'page');
        console.log('[Revalidation] Revalidated /blog');

        // Revalidate specific article page if slug is provided
        if (entry?.slug) {
          revalidatePath(`/blog/${entry.slug}`, 'page');
          console.log(`[Revalidation] Revalidated /blog/${entry.slug}`);
        }

        // Revalidate sitemap for new articles
        revalidatePath('/sitemap.xml', 'page');
        console.log('[Revalidation] Revalidated sitemap');

        // Revalidate homepage if it shows latest articles
        revalidatePath('/', 'page');
        console.log('[Revalidation] Revalidated homepage');
        break;

      case 'portfolio-image':
        revalidatePath('/portfolio');
        console.log('[Revalidation] Revalidated portfolio page');
        break;

      case 'team-member':
        revalidatePath('/about-us');
        console.log('[Revalidation] Revalidated about-us page');
        break;

      case 'home-gallery-image':
      case 'homepage':
        revalidatePath('/');
        console.log('[Revalidation] Revalidated homepage');
        break;

      default:
        revalidatePath('/', 'layout');
        console.log('[Revalidation] Revalidated all paths');
    }

    return NextResponse.json(
      {
        revalidated: true,
        message: `Successfully revalidated ${modelName}`,
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Revalidation] Error:', error);
    return NextResponse.json(
      {
        revalidated: false,
        message: 'Error revalidating',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
