import axios from "axios";

// 다운로드
export const download = (id) => axios.get(`/files/download/${id}`, {responseType: 'blob'}) 

// 삭제
export const remove = (id) => axios.delete(`/files/${id}`)