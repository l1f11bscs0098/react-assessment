import { GistFile } from "@/api";
import { Badge } from "@/components/ui/badge";

type FileBadgesProps = {
    files: {
        [key: string]: GistFile;
    };
};

export function FileBadges({ files }: FileBadgesProps) {
    const languages = Object.values(files).map((file) => file.language);

    return (
        <div className="flex items-center justify-center gap-2 flex-wrap flex-shrink-0">
            {languages.map(
                (language, index) =>
                    language && (
                        <Badge key={index} variant="secondary">
                            {language}
                        </Badge>
                    )
            )}
        </div>
    );
}
