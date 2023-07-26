export const Filesystem = {
    async appendFile(options: any): Promise<any> {
        // Your mock implementation here...
        return { uri: 'mocked_file_uri', data: 'mocked_file_data' };
    },

    async readFile(options: any): Promise<any> {
        // Your mock implementation here...
        return { data: 'Mocked file content goes here!' };
    },

    async writeFile(options: any): Promise<any> {
        // Your mock implementation here...
        return { uri: 'mocked_file_uri', data: 'mocked_file_data' };
    },

    async deleteFile(options: any): Promise<any> {
        // Your mock implementation here...
        return;
    },

    async mkdir(options: any): Promise<any> {
        // Your mock implementation here...
        return;
    },

    async rmdir(options: any): Promise<any> {
        // Your mock implementation here...
        return;
    },

    async readdir(options: any): Promise<any> {
        // Your mock implementation here...
        return { files: [] };
    },

    async getUri(options: any): Promise<any> {
        // Your mock implementation here...
        return { uri: 'mocked_file_uri' };
    },

    async stat(options: any): Promise<any> {
        // Your mock implementation here...
        return { type: 'file', size: 0, ctime: null, mtime: null, uri: 'mocked_file_uri' };
    },

    async copy(options: any): Promise<any> {
        // Your mock implementation here...
        return;
    },

    async move(options: any): Promise<any> {
        // Your mock implementation here...
        return;
    },

    async rename(options: any): Promise<any> {
        // Your mock implementation here...
        return;
    }
}
export const Directory: any = { // Add 'any' type to avoid TS errors for missing properties
    Data: 'mocked_data', // Add the 'Data' property here to fix the errors

    async mkdir(options: any): Promise<any> {
        // Your mock implementation here...
        return;
    },

    async rmdir(options: any): Promise<any> {
        // Your mock implementation here...
        return;
    },

    async readdir(options: any): Promise<any> {
        // Your mock implementation here...
        return { files: [] };
    },

    async getUri(options: any): Promise<any> {
        // Your mock implementation here...
        return { uri: 'mocked_directory_uri' };
    },

    async stat(options: any): Promise<any> {
        // Your mock implementation here...
        return { type: 'directory', size: 0, ctime: null, mtime: null, uri: 'mocked_directory_uri' };
    }
};