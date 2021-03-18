import axios from "axios"

const getUserFromGitHub = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (error) {
        console.log("Usuário Não Encontrado!!!");
    }
}

class GitHub {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (error) {
            console.log("Repositório Não Existe!!!");
        }
    }

    static async getUsers(user) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`)
            console.log(response);
        } catch (error) {
            console.log("Usuario Não Existe!!!");
        }
    }
}

export {
    getUserFromGitHub,
    GitHub
}