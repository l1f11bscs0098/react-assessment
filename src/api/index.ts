import axios from "axios";

const baseUrl = "https://api.github.com";

type Owner = {
    login: string;
    avatar_url: string;
};

export type GistFile = {
    type: string;
    language: string | null;
};

export type UserGist = {
    id: string;
    forks_url: string;
    description: string;
    files: {
        [key: string]: GistFile;
    };
    owner: Owner;
};

export async function getUserGists(username: string) {
    try {
        const { data } = await axios.get(`${baseUrl}/users/${username}/gists`);
        return data as UserGist[];
    } catch (error) {
        console.log(error);
    }
}

export type Fork = {
    id: string;
    owner: Owner;
};

export async function getForks(id: string) {
    try {
        const { data } = await axios.get(`${baseUrl}/gists/${id}/forks`);
        return data as Fork[];
    } catch (error) {
        console.log(error);
    }
}
