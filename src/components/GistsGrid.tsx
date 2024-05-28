import { Link } from "react-router-dom";

import { UserGist } from "@/api";
import { FileBadges } from "@/components/FileBadges";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";

type GistsGridProps = {
    gists: UserGist[];
};

export function GistsGrid({ gists }: GistsGridProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {gists.map((gist) => (
                <Card key={gist.id} className="flex flex-col">
                    <CardHeader className="items-center">
                        <Avatar>
                            <AvatarImage src={gist.owner.avatar_url} />
                            <AvatarFallback>GU</AvatarFallback>
                        </Avatar>
                        <CardDescription>by {gist.owner.login}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 text-center space-y-2">
                        <p className="text-xs">{gist.description}</p>
                        <FileBadges files={gist.files} />
                    </CardContent>
                    <CardFooter>
                        <Button asChild size="sm" className="w-full">
                            <Link to={`/${gist.id}`}>More</Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
