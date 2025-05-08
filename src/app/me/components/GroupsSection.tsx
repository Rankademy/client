import type { UserData } from "@/app/types/user";

interface GroupsSectionProps {
  userData: Pick<UserData, "groups">;
}

export default function GroupsSection({ userData }: GroupsSectionProps) {
  const { groups } = userData;

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-xl font-semibold border-b border-gray-800 pb-2">
        소속 그룹
      </h2>

      {groups.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {groups.map((group) => (
            <div key={group.id} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-medium">{group.name}</h3>
              {group.description && (
                <p className="text-sm text-gray-400 mt-1">
                  {group.description}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">소속된 그룹이 없습니다.</p>
      )}
    </div>
  );
}
