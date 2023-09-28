export interface LoginResponse {
  token_type: string
  access_token: string
  expired_at: string
  account: UserCenterAccount
}

export interface UserCenterAccount {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string
  username: string
  phone: string
  email: string
  gender: string
  real_name: string
  id_number: string
  born_date: Date
  last_login_at: string
  status: string
  is_staff: boolean
  is_super_admin: boolean
  is_company_super_admin: boolean
  company: UserCenterAccountCompany
  days_from_last_login: number
  status_display: string
  gender_display: string
  age: number
  systems: any[]
}

export interface UserCenterAccountCompany {
  id: string
  created_at: string
  updated_at: string
  deleted_at: string
  name: string
  credit_code_tax_id: string
  status: string
  status_display: string
}
