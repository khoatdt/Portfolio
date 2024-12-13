export interface Image {
    id: number;
    src: string;
}

export interface feature {
    name: string;
    description: string;
    icon: (props: { size?: string }) => JSX.Element;
}

export interface Technical {
    name: string;
    icon: React.FC;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    role: string[];
    objective: string;
    features?: feature[];
    technical: Technical[];
    screenshots?: Image[];
}