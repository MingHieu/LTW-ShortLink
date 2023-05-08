import { OperationsByMethodAndPath, PathFor } from './helpers/index'
import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios'
import { API_URL, API_PREFIX } from '~config'
import { storageKey, storageService } from '~core/storage'

class ApiService {
  api

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000/api/',
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  get(url, queryParams, config = {}) {
    return this.api({
      url: url,
      method: 'GET',
      params: queryParams,
      ...config
    })
  }

  post(url, params, queryParams, config = {}) {
    return this.api({
      url: url,
      method: 'POST',
      data: params,
      params: queryParams,
      ...config
    })
  }

  // put<TPath extends PathFor<'PUT'>>(
  //   url: TPath,
  //   params: OperationsByMethodAndPath<'PUT', TPath>['params'],
  //   queryParams?: OperationsByMethodAndPath<'PUT', TPath>['queryParams'],
  //   config: AxiosRequestConfig = {},
  // ): AxiosPromise<OperationsByMethodAndPath<'PUT', TPath>['result']> {
  //   return this.api({
  //     url: url,
  //     method: 'PUT',
  //     data: params,
  //     params: queryParams,
  //     ...config,
  //   });
  // }

  // delete<TPath extends PathFor<'DELETE'>>(
  //   url: TPath,
  //   params?: OperationsByMethodAndPath<'DELETE', TPath>['params'],
  //   queryParams?: OperationsByMethodAndPath<'DELETE', TPath>['queryParams'],
  //   config: AxiosRequestConfig = {},
  // ): AxiosPromise<OperationsByMethodAndPath<'DELETE', TPath>['result']> {
  //   return this.api({
  //     url: url,
  //     method: 'DELETE',
  //     data: params,
  //     params: queryParams,
  //     ...config,
  //   });
  // }
}

export const Request = new ApiService()
