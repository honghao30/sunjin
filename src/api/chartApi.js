import { instance as http } from "@/service/common/httpService";
import { defaultError, alertError } from "@/service/common/errorHandler";

export function getChartData() {
    return http
        .get("/api/chartData")
        .then(res => {
            return res.data.data;
        })
        .catch(err => {
            alertError(err.response.data.message);
            return err;
        });
}

export function getRadarData() {
    return http
        .get("/api/radarData")
        .then(res => {
            return res.data.data;
        })
        .catch(err => {
            alertError(err.response.data.message);
            return err;
        });
}

export function getTopMenuData() {
    return http
        .get("/api/topMenuData")
        .then(res => {
            return res.data.data;
        })
        .catch(err => {
            alertError(err.response.data.message);
            return err;
        })
}

export function getImageData() {
    return http
        .get("/api/imageData")
        .then(res => {
            return res.data.data;
        })
        .catch(err => {
            alertError(err.response.data.message);
            return err;
        })
}

export function getScatterData() {
    return http
        .get("/api/scatterData")
        .then(res => {
            return res.data.data;
        })
        .catch(err => {
            alertError(err.response.data.message);
            return err;
        });
}