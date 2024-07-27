import {cn} from "@/lib/utils";

type CenteredTitleProps = {
    title: string;
    className?: string;
    withLines?: boolean;
    suffix?: string;
}

export const CenteredTitle: React.FC<CenteredTitleProps> = ({withLines = true, suffix = 'год', title, className}) => {
    return (
        <div className={cn("flex items-center justify-center my-2", className)}>
            {withLines && <div className="flex-1 border-t border-muted"/>}
            <span className="mx-4 font-bold text-primary">{title} {suffix}</span>
            {withLines && <div className="flex-1 border-t border-muted"/>}
        </div>
    )
}