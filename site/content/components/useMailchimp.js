import { useState, useCallback } from "react";
import jsonp from "jsonp";

export const Status = {
	idle: 'IDLE',
	loading: 'LOADING',
	success: 'SUCCESS',	
	error: 'ERROR'
}

// convert {key: 'value', key2: 'value2'} to 'key=value&key2=value2'
export function toQueryString(params) {
  return Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");
}

export function useMailchimp(url) {
  const [status, setStatus] = useState(Status.idle);
  const [error, setError] = useState(null);
  const [value, setValue] = useState(null);

  const subscribe = useCallback((data) => {
    const params = toQueryString(data);
    const ajaxURL = url.replace("/post?", "/post-json?");
    const newUrl = ajaxURL + "&" + params;

    setError(null);
    setStatus(Status.loading);

    jsonp(newUrl, { param: "c"}, (err, data) => {
      if (err) {
        setStatus(Status.error);
        setError(data.msg);
      } else if (data.result !== "success") {
        setStatus(Status.error);
        setError(data.msg);
      } else {
        setStatus(Status.success);
        setValue(data.msg);
      }
    })
  },[])

  return {
    subscribe, status, value, error
  }
}
