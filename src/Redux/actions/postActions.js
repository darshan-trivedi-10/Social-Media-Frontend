import * as postApi from '../../Api/postRequest'

export const getTimelinePosts = (id) => async (dispatch) => {
    dispatch({ type: "RETREIVING_START" })
    try {
        const { data } = await postApi.getTimelinePosts(id);
        dispatch({ type: "RETREIVING_SUCCESS", data: data })
    } catch (error) {
        console.log(error)
        dispatch({ type: "RETREIVING_FAIL" })
    }
}