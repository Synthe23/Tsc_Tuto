import type { ReactNode } from "react";

interface UserCardProps {
    id: string;
    name?: string,
    subtitle?: ReactNode // ReactNode means it can be a string, fragment or anything
}