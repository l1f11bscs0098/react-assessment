import { Fork } from "@/api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";

type ForksGridProps = {
    forks: Fork[];
};

export function ForksGrid({ forks }: ForksGridProps) {
    const forksSlice = forks.slice(0, 3);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {forksSlice.map((fork) => (
                <Card key={fork.id}>
                    <CardHeader className="items-center">
                        <Avatar>
                            <AvatarImage src={fork.owner.avatar_url} />
                            <AvatarFallback>GU</AvatarFallback>
                        </Avatar>
                        <CardDescription>by {fork.owner.login}</CardDescription>
                    </CardHeader>
                </Card>
            ))}
        </div>
    );
}
