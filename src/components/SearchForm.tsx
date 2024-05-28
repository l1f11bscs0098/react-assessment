import { FormEvent, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SearchFormProps = {
    onSubmit: (username: string) => void;
};

export function SearchForm({ onSubmit }: SearchFormProps) {
    const usernameInputRef = useRef<HTMLInputElement | null>(null);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (usernameInputRef.current) {
            onSubmit(usernameInputRef.current.value);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-2">
            <Input required ref={usernameInputRef} type="text" placeholder="Search by github username" className="placeholder:text-xs" />
            <Button type="submit" size="sm">
                Search
            </Button>
        </form>
    );
}
