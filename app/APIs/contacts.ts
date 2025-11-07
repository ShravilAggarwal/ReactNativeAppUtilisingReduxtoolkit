const BASE_API_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchContacts() {
    try {
        const response = (await fetch(`${BASE_API_URL}/users`));
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching contacts:', error);
    }
}