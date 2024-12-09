export interface Image {
    id: number;
    src: string;
}

export interface feature {
    name: string;
    description: string;
    icon: any;
}

export interface Technical {
    name: string;
    icon: any;
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