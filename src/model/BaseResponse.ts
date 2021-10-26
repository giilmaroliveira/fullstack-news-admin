export default interface BaseResponse<T> {
  success: boolean;
  data: T
}