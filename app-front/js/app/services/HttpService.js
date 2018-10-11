class HttpService {
    constructor() {
        this._http = new XMLHttpRequest()
    }

    get(url) {
        return new Promise((resolve,reject) => {
            this._http.open('GET',url);
            this._http.onreadystatechange = () => {
                if (this._http.readyState == 4) {
                    if (this._http.status == 200) {
                        resolve(JSON.parse(this._http.responseText));
                    } else {
                        reject(this._http.status + this._http.responseText);
                    }
                }
            }
            this._http.send();
        })
        
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            this._http.open("POST", url, true);
            this._http.setRequestHeader("Content-Type", "application/json");
            this._http.onreadystatechange = () => {
                if (this._http.readyState == 4) {
                    if (this._http.status == 200) {
                        resolve(JSON.parse(this._http.responseText));
                    } else {
                        reject(this._http.status + this._http.responseText);
                    }
                }
            };
            this._http.send(JSON.stringify(data));
        })
    }

    delete(url) {
        return new Promise((resolve,reject) => {
            this._http.open('DELETE',url);
            this._http.onreadystatechange = () => {
                if (this._http.readyState == 4) {
                    if (this._http.status == 200) {
                        resolve("removido com sucesso!");
                    } else {
                        reject(this._http.status + this._http.responseText);
                    }
                }
            }
            this._http.send();
        })
    }

}