const numPatternChallenge = () =>{
    let x = 22
    let y = 11

    for(let i = 0; i < 10; i++){
        x-=2
        y-=1
        console.log(x + 'X' + y + '=' + x*y )
    }
}




window.addEventListener('load', ()=>{

    window.addEventListener('resize', ()=>{
        location.reload()
    })

    const mouth = document.querySelector('.mouth')
    const face = document.querySelector('.emoji-face')
    
    face.addEventListener('mouseover', ()=>{
        mouth.classList.add('mouth-active')
    })
    
    face.addEventListener('mouseout', ()=>{
        mouth.classList.remove('mouth-active')
    })


    const centerEye1Y = document.querySelector('.eyeball1').getBoundingClientRect().y + document.querySelector('.eyeball1').clientHeight/2
    const centerEye1X = document.querySelector('.eyeball1').getBoundingClientRect().x + document.querySelector('.eyeball1').clientWidth/2
    const centerEye2Y = document.querySelector('.eyeball2').getBoundingClientRect().y + document.querySelector('.eyeball2').clientHeight/2
    const centerEye2X = document.querySelector('.eyeball2').getBoundingClientRect().x + document.querySelector('.eyeball2').clientWidth/2
    
    document.body.addEventListener('mousemove', (event)=>{
        const mousePosY = event.pageY
        const mousePosX = event.pageX
    
        eye1DistanceY = mousePosY - centerEye1Y
        eye1DistanceX = mousePosX - centerEye1X
        eye1Radian = Math.atan2(eye1DistanceX, eye1DistanceY) * -1 + Math.PI
        eye1Angle = eye1Radian * 180/Math.PI
        document.querySelector('.eyeball1').style.setProperty('--angle', eye1Angle)
    
    
        eye2DistanceY = mousePosY - centerEye2Y
        eye2DistanceX = mousePosX - centerEye2X
        eye2Radian = Math.atan2(eye2DistanceX, eye2DistanceY) * -1 + Math.PI
        eye2Angle = eye2Radian * 180/Math.PI
        document.querySelector('.eyeball2').style.setProperty('--angle', eye2Angle)
    })
})


