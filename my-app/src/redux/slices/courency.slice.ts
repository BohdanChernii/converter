import {ICourencies, IResult} from "../../interface";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {courencyService} from "../../services";

interface IState {
  response:ICourencies | {},
  error:string,
  loading:boolean
}
const initialState:IState ={
  response:{},
  error:'',
  loading:true,
}

const getCourencies = createAsyncThunk<IResult<ICourencies>>(
  'courenciesSlice/getCourencies',
  async (_,{rejectWithValue})=>{
    try {
      const {data} = await courencyService.get()
      return data.rates
    }catch (e){
      const err = e as AxiosError
      return rejectWithValue(err.response?.data)
    }
}
)
const courenciesSlice = createSlice({
  name:'courenciesSlice',
  initialState,
  reducers:{},
  extraReducers:builder => builder
    .addCase(getCourencies.fulfilled,(state,action)=>{
    state.response =action.payload
    state.error = ''
    state.loading = false
  }).addCase(getCourencies.pending,(state)=>{
      state.loading = true
    }).addCase(getCourencies.rejected,(state)=>{
      state.loading = false
      state.error = 'Error with loading data'
    })
})
const {reducer: courenciesReducer,actions:{} }= courenciesSlice

const courenciesActions = {
  getCourencies
}
export {courenciesReducer,  courenciesActions, courenciesSlice}