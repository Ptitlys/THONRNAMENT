import 'reflect-metadata';

export function mapFilesToDto<T extends object>(dto: T, req: any): T {
    for (const key in dto) {
        const fileKey = Reflect.getMetadata('fromFile', dto, key);
        if (fileKey) {
            const file = req.file?.fieldname === fileKey ? req.file : req.files?.[fileKey];
            if (file) {
                dto[key] = file.buffer;
            }
        }
    }
    return dto;
}