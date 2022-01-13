import {createSlice} from '@reduxjs/toolkit'
import localState from "../component/SideBar/localState";

const { screens, colors, designs, videos } = localState

const  initScreen= () => {
    if (localStorage.getItem("screen")) {
        return screens[JSON.parse(localStorage.getItem("screen"))].name
    } else {
        localStorage.setItem("screen", '0')
        return screens[0].name
    }
}

const  initColor = () => {
    if (localStorage.getItem("color")) {
        return colors[JSON.parse(localStorage.getItem("color"))].url
    } else {
        localStorage.setItem("color", '0')
        return colors[0].url
    }
}

const  initDesign = () => {
    if (localStorage.getItem("design")) {
        return designs[JSON.parse(localStorage.getItem("design"))].url
    } else {
        localStorage.setItem("design", '0')
        return designs[0].url
    }
}

const  initVideo = () => {
    if (localStorage.getItem("video")) {
        return videos[JSON.parse(localStorage.getItem("video"))].url
    } else {
        localStorage.setItem("video", '0')
        return videos[0].url
    }
}

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        screen: initScreen(),
        color: initColor(),
        design: initDesign(),
        video: initVideo(),
        activeStep: localStorage.getItem("step") ? Number(localStorage.getItem("step")) : 0,
        // timeForSlideshow: 60,
        // time: Date.now(),
        // cart: [],
        // showModel: false,
        // openСover: true
    },

    reducers: {
        updateScreen: (state, action) => {
            return {...state, screen: screens[action.payload].name}
        },

        updateColor: (state, action) => {
            return {...state, color: colors[action.payload].url}
        },

        updateDesign: (state, action) => {
            return {...state, design: designs[action.payload].url}
        },

        updateVideo: (state, action) => {
          return {...state, video: videos[action.payload].url}
        },

        updateActiveStep: (state, action) => {

          return {...state, activeStep: action.payload}
        },
    },
})

export const {updateScreen, updateColor, updateDesign, updateVideo, updateActiveStep } = productSlice.actions

export default productSlice.reducer


