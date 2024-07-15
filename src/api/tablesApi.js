import { instance as http } from "@/service/common/httpService";
import { defaultError, alertError } from "@/service/common/errorHandler";

// 사용자 체크
export function getTestData() {
  return http
    .get("/api/tableData")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function modifyTestData(index) {
  return http
    .get("/api/tableData")
    .then(res => {
      res.data.data[index].name = "Chen " + index;
      return res.data.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function deleteTestData() {
  return http
    .get("/api/delete")
    .then(res => {
      return res.status;
    })
    .catch(err => {
      // alertError(err.response.data.message);
      return "error";
    });
}

export function getTestData2() {
  return http
    .get("/api/tableData2")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function basicColumnChart() {
  return http
    .get("/api/basicColumnChart")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function distributedColumnChart() {
  return http
    .get("/api/distributedColumnChart")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function dynamicLoadedColumnChart() {
  return http
    .get("/api/dynamicLoadedColumnChart")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function bubbleChartData() {
  return http
    .get("/api/bubbleChartData")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function pieChartData() {
  return http
    .get("/api/pieChartData")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function mixedChartData() {
  return http
    .get("/api/mixedChartData")
    .then(res => {
      return res.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function mixedChartData2() {
  return http
    .get("/api/mixedChartData2")
    .then(res => {
      return res.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function basicBarChart() {
  return http
    .get("/api/basicBarChart")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function groupedBarChart() {
  return http
    .get("/api/groupedBarChart")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function stackedBarChart() {
  return http
    .get("/api/stackedBarChart")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function withNegativeBarChart() {
  return http
    .get("/api/withNegativeBarChart")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function getAlbumInfo() {
  return http
    .get("/api/albumTable")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function getBoxPlotData() {
  return http
    .get("/api/boxPlotChart")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function getGroupCode() {
  return http
    .get("http://localhost:8080/api/groupCode")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function getCode(groupCodeId) {
  return http
    .get("http://localhost:8080/api/code/"+ groupCodeId +"")
    .then(res => {
      return res.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function getWordCloud() {
  return http
    .get("/api/wordCloud")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function getGenomicData() {
  return http
    .get("/api/genomicData")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}

export function getAutoCompleteData() {
  return http
    .get("/api/autoComplete")
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      alertError(err.response.data.message);
      return "error";
    });
}