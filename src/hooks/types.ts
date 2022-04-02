export type ContextHelperFunction = (props: any) => void

type ContextAction = {
  type: string
  key: string
  payload: any
}

export type ContextActionCreator = (props: any) => ContextAction
