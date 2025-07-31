export interface ResponseBaseDto<T> {
    data: T;
    message: string;
    success: boolean;
    statusCode: number;     
}