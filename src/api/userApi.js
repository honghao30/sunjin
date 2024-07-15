import { instance as http } from "@/service/common/httpService";
import { defaultError, alertError } from "@/service/common/errorHandler";

// 사용자 체크
export function getUserAuth(formData) {
  return http
    .post("/api/user/login", formData)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}
