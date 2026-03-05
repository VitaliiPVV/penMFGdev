export function getLinkedInEmbedUrl(postUrl: string): string | null {
  if (!postUrl) return null;

  const activityUrnMatch = postUrl.match(/urn:li:activity:(\d+)/);
  if (activityUrnMatch) {
    return `https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:${activityUrnMatch[1]}?compact=1`;
  }

  const ugcPostMatch = postUrl.match(/ugcPost-(\d+)/);
  if (ugcPostMatch) {
    return `https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:${ugcPostMatch[1]}?compact=1`;
  }

  const activityMatch = postUrl.match(/activity-(\d+)/);
  if (activityMatch) {
    return `https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:${activityMatch[1]}?compact=1`;
  }

  return null;
}
