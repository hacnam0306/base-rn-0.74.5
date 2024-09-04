import {authenticatedApi as api} from 'redux_/api/authenticated.api';

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    makerControllerCreateMakerAdmin: build.mutation<
      MakerControllerCreateMakerAdminApiResponse,
      MakerControllerCreateMakerAdminApiArg
    >({
      query: queryArg => ({
        url: '/api/v1/makers',
        method: 'POST',
        body: queryArg.createMakerAdminDto,
      }),
    }),
    makerControllerGetMakerAdmin: build.query<
      MakerControllerGetMakerAdminApiResponse,
      MakerControllerGetMakerAdminApiArg
    >({
      query: queryArg => ({
        url: '/api/v1/makers',
        params: {
          page: queryArg.page,
          limit: queryArg.limit,
          sort: queryArg.sort,
          search: queryArg.search,
        },
      }),
    }),
    makerControllerUpdateAdminMaker: build.mutation<
      MakerControllerUpdateAdminMakerApiResponse,
      MakerControllerUpdateAdminMakerApiArg
    >({
      query: queryArg => ({
        url: `/api/v1/makers/${queryArg.id}`,
        method: 'PATCH',
        body: queryArg.updateMakerAdminDto,
      }),
    }),
    makerCompanyControllerUpdateAdminMaker: build.mutation<
      MakerCompanyControllerUpdateAdminMakerApiResponse,
      MakerCompanyControllerUpdateAdminMakerApiArg
    >({
      query: queryArg => ({
        url: '/api/v1/maker-company',
        method: 'PATCH',
        body: queryArg.updateMakerCompanyDto,
      }),
    }),
    makerStaffControllerCreateMakerAdmin: build.mutation<
      MakerStaffControllerCreateMakerAdminApiResponse,
      MakerStaffControllerCreateMakerAdminApiArg
    >({
      query: queryArg => ({
        url: '/api/v1/maker-staffs',
        method: 'POST',
        body: queryArg.createMakerStaffDto,
      }),
    }),
    makerStaffControllerGetMakerStaffs: build.query<
      MakerStaffControllerGetMakerStaffsApiResponse,
      MakerStaffControllerGetMakerStaffsApiArg
    >({
      query: queryArg => ({
        url: '/api/v1/maker-staffs',
        params: {
          page: queryArg.page,
          limit: queryArg.limit,
          sort: queryArg.sort,
          search: queryArg.search,
        },
      }),
    }),
    makerStaffControllerUpdateMakerStaff: build.mutation<
      MakerStaffControllerUpdateMakerStaffApiResponse,
      MakerStaffControllerUpdateMakerStaffApiArg
    >({
      query: queryArg => ({
        url: `/api/v1/maker-staffs/${queryArg.id}`,
        method: 'PATCH',
        body: queryArg.updateMakerStaffDto,
      }),
    }),
    makerStaffControllerDeleteMakerStaff: build.mutation<
      MakerStaffControllerDeleteMakerStaffApiResponse,
      MakerStaffControllerDeleteMakerStaffApiArg
    >({
      query: queryArg => ({
        url: `/api/v1/maker-staffs/${queryArg.id}`,
        method: 'DELETE',
      }),
    }),
    makerStaffControllerGetMakerStaff: build.query<
      MakerStaffControllerGetMakerStaffApiResponse,
      MakerStaffControllerGetMakerStaffApiArg
    >({
      query: queryArg => ({url: `/api/v1/maker-staffs/${queryArg.id}`}),
    }),
  }),
  overrideExisting: false,
});
export {injectedRtkApi as enhancedApi};
export type MakerControllerCreateMakerAdminApiResponse =
  /** status 200  */ SuccessResponseDto & {
    data?: UserResponseDto;
  };
export type MakerControllerCreateMakerAdminApiArg = {
  createMakerAdminDto: CreateMakerAdminDto;
};
export type MakerControllerGetMakerAdminApiResponse =
  /** status 200  */ SuccessResponseDto & {
    data?: GetUsersResponseDto;
  };
export type MakerControllerGetMakerAdminApiArg = {
  page?: number;
  limit?: number;
  sort?:
    | '+id'
    | '-id'
    | '+name'
    | '-name'
    | '+email'
    | '-email'
    | '+createdAt'
    | '-createdAt';
  search?: string;
};
export type MakerControllerUpdateAdminMakerApiResponse =
  /** status 200  */ SuccessResponseDto & {
    data?: UserResponseDto;
  };
export type MakerControllerUpdateAdminMakerApiArg = {
  id: number;
  updateMakerAdminDto: UpdateMakerAdminDto;
};
export type MakerCompanyControllerUpdateAdminMakerApiResponse =
  /** status 200  */ SuccessResponseDto & {
    data?: MakerCompanyResponseDto;
  };
export type MakerCompanyControllerUpdateAdminMakerApiArg = {
  updateMakerCompanyDto: UpdateMakerCompanyDto;
};
export type MakerStaffControllerCreateMakerAdminApiResponse =
  /** status 200  */ SuccessResponseDto & {
    data?: UserResponseDto;
  };
export type MakerStaffControllerCreateMakerAdminApiArg = {
  createMakerStaffDto: CreateMakerStaffDto;
};
export type MakerStaffControllerGetMakerStaffsApiResponse =
  /** status 200  */ SuccessResponseDto & {
    data?: GetUsersResponseDto;
  };
export type MakerStaffControllerGetMakerStaffsApiArg = {
  page?: number;
  limit?: number;
  sort?:
    | '+id'
    | '-id'
    | '+name'
    | '-name'
    | '+email'
    | '-email'
    | '+createdAt'
    | '-createdAt';
  search?: string;
};
export type MakerStaffControllerUpdateMakerStaffApiResponse =
  /** status 200  */ SuccessResponseDto & {
    data?: any;
  };
export type MakerStaffControllerUpdateMakerStaffApiArg = {
  id: number;
  updateMakerStaffDto: UpdateMakerStaffDto;
};
export type MakerStaffControllerDeleteMakerStaffApiResponse =
  /** status 200  */ SuccessResponseDto & {
    data?: any;
  };
export type MakerStaffControllerDeleteMakerStaffApiArg = {
  id: number;
};
export type MakerStaffControllerGetMakerStaffApiResponse =
  /** status 200  */ SuccessResponseDto & {
    data?: UserResponseDto;
  };
export type MakerStaffControllerGetMakerStaffApiArg = {
  id: number;
};
export type SuccessResponseDto = {
  statusCode: object;
  message: string;
  data: object;
};
export type UserRole =
  | 'SYSTEM_ADMIN'
  | 'MAKER'
  | 'MAKER_STAFF'
  | 'TRANSPORT_COMPANY'
  | 'TRANSPORT_COMPANY_STAFF'
  | 'DRIVER';
export type DriverResponseDto = {
  id: number;
  createdAt: string;
  updatedAt: string;
  createdBy: number;
  updatedBy: number;
  transportCompanyId: number;
  katakanaName: string;
  birthday: string;
  address: string;
  phone: string;
  licenseNumber: string;
  qualificationName1: string;
  qualificationImage1: string;
  qualificationName2: string;
  qualificationImage2: string;
  qualificationName3: string;
  qualificationImage3: string;
};
export type MakerCompanyResponseDto = {
  id: number;
  createdAt: string;
  updatedAt: string;
  createdBy: number;
  updatedBy: number;
  companyName: string;
  postCode: string;
  pref: string;
  city: string;
  street: string;
  building: string;
  phone: string;
  emerContact1: string;
  emerContact2: string;
  emerContact3: string;
  fax: string;
  homepage: string;
};
export type MakerStaffResponseDto = {
  id: number;
  createdAt: string;
  updatedAt: string;
  createdBy: number;
  updatedBy: number;
  department: string;
  makerCompanyId: number;
  makerCompany: MakerCompanyResponseDto;
  isManager: boolean;
  note: string | null;
};
export type TransportCompanyStaffDto = {
  id: number;
  createdAt: string;
  updatedAt: string;
  createdBy: number;
  updatedBy: number;
  department: string;
  note: string;
  transportCompanyId: number;
  isManager: boolean;
};
export type UserResponseDto = {
  id: number;
  createdAt: string;
  updatedAt: string;
  createdBy: number;
  updatedBy: number;
  loginId: string;
  password: string | null;
  phone: string | null;
  name: string;
  email: string | null;
  role: UserRole;
  isActive: boolean;
  driver: DriverResponseDto | null;
  makerCompanyId: number;
  makerStaff: MakerStaffResponseDto | null;
  transportCompanyStaff: TransportCompanyStaffDto | null;
};
export type CreateMakerAdminDto = {
  loginId: string;
  companyName: string;
  email: string;
  phone: string;
  emerContact1: string;
  postCode: string;
  pref: string;
  city: string;
  street: string;
  building: string;
  emerContact2: string;
  emerContact3: string;
  fax: string;
  homepage: string;
  isActive: boolean;
};
export type PaginationResponseDto = {
  page: number;
  limit: number;
  count: number;
  totalCount: number;
  totalPage: number;
};
export type GetUsersResponseDto = {
  results: UserResponseDto[];
  pagination: PaginationResponseDto;
};
export type UpdateMakerAdminDto = {
  loginId: string;
  companyName: string;
  email: string;
  phone: string;
  emerContact1: string;
  postCode: string;
  pref: string;
  city: string;
  street: string;
  building: string;
  emerContact2: string;
  emerContact3: string;
  fax: string;
  homepage: string;
  isActive: boolean;
};
export type UpdateMakerCompanyDto = {
  companyName: string;
  postCode: string;
  pref: string;
  city: string;
  street: string;
  building: string | null;
  phone: string;
  emerContact1: string | null;
  emerContact2: string | null;
  emerContact3: string | null;
  fax: string | null;
  homepage: string | null;
};
export type CreateMakerStaffDto = {
  role: 'MAKER' | 'MAKER_STAFF';
  department: string;
  name: string;
  email: string;
  phone: string;
  note?: string | null;
  password: string;
};
export type UpdateMakerStaffDto = {
  role: 'MAKER' | 'MAKER_STAFF';
  department: string;
  name: string;
  email: string;
  phone: string;
  note?: string | null;
  password?: string;
};
export const {
  useMakerControllerCreateMakerAdminMutation,
  useMakerControllerGetMakerAdminQuery,
  useMakerControllerUpdateAdminMakerMutation,
  useMakerCompanyControllerUpdateAdminMakerMutation,
  useMakerStaffControllerCreateMakerAdminMutation,
  useMakerStaffControllerGetMakerStaffsQuery,
  useMakerStaffControllerUpdateMakerStaffMutation,
  useMakerStaffControllerDeleteMakerStaffMutation,
  useMakerStaffControllerGetMakerStaffQuery,
} = injectedRtkApi;
