const API_URL = 'http://my-json-server.typicode.com/orlovskyalex/jellyfish-fake-rest-server';

export class Api {
    static HEADERS = {'Content-Type': 'application/json'};

    static async get(url: string) {
        try {
            return await request(url);
        } catch (e) {
            console.warn(e)
            throw e;
        }
    };

    static async post(url: string, data = {}) {
        try {
            return await request(url, 'POST', data);
        } catch (e) {
            console.warn(e)
            throw e;
        }
    };

    static async delete(url: string) {
        try {
            return await request(url, 'DELETE');
        } catch (e) {
            console.warn(e)
            throw e;
        }
    };

    static async patch(url: string, data = {}) {
        try {
            return await request(url, 'PATCH', data);
        } catch (e) {
            console.warn(e)
            throw e;
        }
    };
}

async function request(url: string, method = 'GET', data?: RequestedData) {
    const config: RequestedConfig = {
        method,
        headers: Api.HEADERS,
    };

    if (method === 'POST' || method === 'PATCH') {
        config.body = JSON.stringify(data);
    }

    const response = await fetch(url, config);

    return await response.json();
}


export const fetchPreparedPosts = async () => {
    const [posts, users, comments] = await Promise.all([
        Api.get(`${API_URL}/posts`),
        Api.get(`${API_URL}/users`),
        Api.get(`${API_URL}/comments`),
    ]);

    return posts.map((post: Post) => ({
        ...post,
        comments: comments
            .filter((comment: Comment) => comment.post === post.id)
            .map((comment: Comment) => ({
                ...comment,
                author: users.find((user: Author) => user.id === comment.author)!.username,
            })),
        author: users.find((user: Author) => user.id === post.author)!.username,
    }));
};

export const fetchUsers = async () => {
    return await Api.get(`${API_URL}/users`);
}
