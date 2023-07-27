export const Filesystem = {
    async appendFile(options: any): Promise<any> {
        return { uri: 'mocked_file_uri', data: 'mocked_file_data' };
    },

    async readFile(options: any): Promise<any> {
        return { data: 'Mocked file content goes here!' };
    },

    async writeFile(options: any): Promise<any> {
        return { uri: 'mocked_file_uri', data: 'mocked_file_data' };
    },

    async deleteFile(options: any): Promise<any> {
        return;
    },

    async mkdir(options: any): Promise<any> {
        return;
    },

    async rmdir(options: any): Promise<any> {
        return;
    },

    async readdir(options: any): Promise<any> {
        return { files: [] };
    },

    async getUri(options: any): Promise<any> {
        return { uri: 'mocked_file_uri' };
    },

    async stat(options: any): Promise<any> {
        return { type: 'file', size: 0, ctime: null, mtime: null, uri: 'mocked_file_uri' };
    },

    async copy(options: any): Promise<any> {
        return;
    },

    async move(options: any): Promise<any> {
        return;
    },

    async rename(options: any): Promise<any> {
        return;
    }
}
export const Directory: any = {
    Data: 'mocked_data',

    async mkdir(options: any): Promise<any> {
        return;
    },

    async rmdir(options: any): Promise<any> {
        return;
    },

    async readdir(options: any): Promise<any> {
        return { files: [] };
    },

    async getUri(options: any): Promise<any> {
        return { uri: 'mocked_directory_uri' };
    },

    async stat(options: any): Promise<any> {
        return { type: 'directory', size: 0, ctime: null, mtime: null, uri: 'mocked_directory_uri' };
    }
};