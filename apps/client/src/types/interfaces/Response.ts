export type Response<T> = {
  status: "success" | "fail",
  data?: T,
  error?: any
}