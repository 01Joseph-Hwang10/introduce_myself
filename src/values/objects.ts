import { ProjectCardProps } from "@src/vue/project-card";
import { LevelLegendProps } from "@src/vue/level-legend";
import { StackIconProps } from "@src/vue/stack-icon";
import { StatusItemProps } from "@src/vue/status-item";

interface ObjectRes {
    stackIcon: Record<string, StackIconProps>;
    levelLegend: Record<string, LevelLegendProps>;
    statusItem: Record<string, StatusItemProps>;
    projectCard: Record<string, ProjectCardProps>;
}

export const objects: ObjectRes = {
    projectCard: {
        fg: {
            name: "Fg",
            title: 'Start the project, Share the workflow',
            subtitles: [
                'Plan, Organize, Manage the project',
                'Share your workflow, and inspired by the others',
            ],
            summary: "My very first dev project",
            descriptionKey: 'projectFg',
        },
        mypy: {
            name: "Mypy",
            title: "MYPY: Python app everywhere!",
            subtitles: ['MYPY serves your python app online!'],
            summary: "I think this idea is quite awesome...",
            descriptionKey: 'projectMypy',
        },
        ctb: {
            name: "❤️",
            title: "커플되는 부적",
            subtitles: [],
            summary: "Just For Fun",
            descriptionKey: 'projectCTB',
        },
        erin: {
            name: "Erin",
            title: "Erin: Interactive letter editor",
            subtitles: [
                "Make your letter alive!"
            ],
            summary: "Inspired by a love letter",
            descriptionKey: 'projectErin',
        },
        timer: {
            name: "⌚️",
            title: "Simple Timer",
            subtitles: [],
            summary: "Seriously?",
            descriptionKey: "projectTimer",
        },
        buxHexa: {
            name: "🚌",
            title: "Bux Hexa",
            subtitles: [],
            summary: "Toy project from school CS club",
            descriptionKey: "projectBuxHexa",
        },
        tb: {
            name: "TB",
            title: "Working on Tripbuilder",
            subtitles: [
                'position: FE developer'
            ],
            summary: "Contributing projects",
            descriptionKey: 'tripbuilder',
        },
        labis: {
            name: "LabIs",
            title: "Working on LabIs",
            subtitles: [
                'position: FE developer',
            ],
            summary: "Contributing projects",
            descriptionKey: 'labis',
        },
        gf: {
            name: "GF",
            title: "Golden Friends",
            subtitles: [
                'position: CTO',
            ],
            summary: "Contributing projects",
            descriptionKey: 'goldenFriends',
        },
    },
    statusItem: {
        user: {
            icon: 'fa-user',
            value: 'Born at 2002',
        },
        university: {
            icon: 'fa-university',
            value: 'Undergraduate program at UNIST',
        },
        info: {
            icon: 'fa-info-circle',
            value: 'Music and photo as a hobby',
        },
    },
    levelLegend: {
        l1: { value: 0, description: 'No Nothing' },
        l2: { value: 10, description: 'Learning' },
        l3: { value: 50, description: 'Can apply to my project' },
        l4: { value: 75, description: 'Can cooperate' },
        l5: { value: 100, description: 'Quite confident' },
    },
    stackIcon: {
        html: {
            logoId: "html",
            name: "HTML",
            confidence: 100,
        },
        css: {
            logoId: "css",
            name: "CSS",
            confidence: 100,
        },
        scss: {
            logoId: "scss",
            name: "SCSS",
            confidence: 95,
        },
        tailwind: {
            logoId: "tailwind",
            name: "Tailwind CSS",
            confidence: 95,
        },
        javascript: {
            logoId: "js",
            name: "Javascript",
            confidence: 90,
        },
        typescript: {
            logoId: "ts",
            name: "Typescript",
            confidence: 100,
        },
        python: {
            logoId: "python",
            name: "Python",
            confidence: 90,
        },
        django: {
            logoId: "django",
            name: "Django",
            confidence: 95
        },
        drf: {
            logoId: "DRF",
            name: "Django Rest Framework",
            confidence: 90,
        },
        graphene: {
            logoId: "graphene",
            name: "Graphene",
            confidence: 45,
        },
        flask: {
            logoId: "flask",
            name: "Flask",
            confidence: 80,
        },
        apollo: {
            logoId: "apollo",
            name: "Apollo",
            confidence: 75,
        },
        graphql: {
            logoId: "graphql",
            name: "Graphql",
            confidence: 75,
        },
        react: {
            logoId: "react",
            name: "React",
            confidence: 100,
        },
        reactNative: {
            logoId: "react",
            name: "React Native",
            confidence: 95,
        },
        redux: {
            logoId: "redux",
            name: "Redux",
            confidence: 85,
        },
        next: {
            logoId: "next",
            name: "Next",
            confidence: 85,
        },
        nest: {
            logoId: "nest",
            name: "Nest",
            confidence: 80,
        },
        docker: {
            logoId: "docker",
            name: "Docker",
            confidence: 65,
        },
        nginx: {
            logoId: "nginx",
            name: "Nginx",
            confidence: 55,
        },
        ubuntu: {
            logoId: "ubuntu",
            name: "Ubuntu",
            confidence: 80,
        },
        flutter: {
            logoId: "flutter",
            name: "Flutter",
            confidence: 85,
        },
        postgresql: {
            logoId: "postgresql",
            name: "Postgresql",
            confidence: 45,
        },
        vue: {
            logoId: "vue",
            name: "Vue",
            confidence: 55,
        },
        svelte: {
            logoId: "svelte",
            name: "Svelte",
            confidence: 55,
        },
        electron: {
            logoId: "electron",
            name: "Electron",
            confidence: 55,
        },
        express: {
            logoId: "express",
            name: "Express",
            confidence: 45,
        },
        webcomponents: {
            logoId: "webcomponents",
            name: "Web Components",
            confidence: 65,
        },
        go: {
            logoId: 'go',
            name: "Go",
            confidence: 60,
        },
        aws: {
            logoId: "aws",
            name: "Amazon Web Services",
            confidence: 50,
        },
    },
}