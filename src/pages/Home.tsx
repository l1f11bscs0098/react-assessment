import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

import { getUserGists } from "@/api";
import { GistsGrid } from "@/components/GistsGrid";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { SearchForm } from "@/components/SearchForm";

export function Home() {
    const {
        data,
        isError,
        isPending,
        mutate: searchUserGists,
    } = useMutation({
        mutationKey: ["get-user-gists"],
        mutationFn: getUserGists,
        onSuccess: () => {},
        onError: (error) => {
            console.log(error);
        },
    });

    function handleSearch(username: string) {
        searchUserGists(username);
    }

    return (
        <MaxWidthWrapper className="py-8 space-y-8">
            <SearchForm onSubmit={handleSearch} />
            {isPending && <Loader2 className="mx-auto h-8 w-8 animate-spin text-zinc-500" />}
            {isError && <p className="text-center text-zinc-500 text-sm">Something went wrong</p>}
            {!isPending && !isError && data?.length === 0 && <p className="text-center text-zinc-500 text-sm">No gists found</p>}
            {!isPending && !isError && <GistsGrid gists={data || []} />}
        </MaxWidthWrapper>
    );
}
