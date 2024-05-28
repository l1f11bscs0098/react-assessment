import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, Loader2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { getForks } from "@/api";
import { ForksGrid } from "@/components/ForksGrid";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

export function Details() {
    const { id } = useParams();

    const { data, isError, isLoading } = useQuery({
        queryKey: ["get-forks", id],
        queryFn: () => getForks(id as string),
        enabled: id ? true : false,
    });

    return (
        <MaxWidthWrapper className="py-8 space-y-4">
            {isLoading && <Loader2 className="mx-auto h-8 w-8 animate-spin text-zinc-500" />}
            {isError && <p className="text-center text-zinc-500 text-sm">Something went wrong</p>}
            {!isLoading && !isError && data?.length === 0 && <p className="text-center text-zinc-500 text-sm">No forks found</p>}
            {!isLoading && !isError && <ForksGrid forks={data || []} />}

            <div className="flex items-center justify-center">
                <Button asChild size="sm">
                    <Link to="/">
                        <ChevronLeft size={14} /> Back
                    </Link>
                </Button>
            </div>
        </MaxWidthWrapper>
    );
}
