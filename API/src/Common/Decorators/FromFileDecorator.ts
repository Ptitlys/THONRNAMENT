import 'reflect-metadata';

export function FromFile(fileKey?: string) {
    return function (target: Object, propertyKey: string | symbol) {
        Reflect.defineMetadata('fromFile', fileKey ?? propertyKey.toString(), target, propertyKey);
    };
}
