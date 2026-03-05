import { getCollection } from '@/lib/strapi/strapi';
import { Heading } from '@/components/ui';
import { StrapiTeamMember } from '@/types';
import { TeamCard } from './TeamCard';

const Team = async () => {
  const { data: members } = await getCollection<StrapiTeamMember>('team-members', {
    populate: '*',
    sort: 'createdAt:asc',
  });

  return (
    <section className="flex flex-col gap-16">
      <Heading as="h2" className="text-2xl/8 2xl:text-[32px]/10 font-bold text-neutral">
        Metal Fabrication Shop in Southern California
      </Heading>

      <ul className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 gap-6">
        {members.map((props) => (
          <li key={props.id}>
            <TeamCard {...props} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Team;
