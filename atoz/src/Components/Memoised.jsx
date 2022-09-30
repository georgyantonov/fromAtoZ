import React, { memo } from 'react'
import MyButton from './UI/button/MyButton'

function Memoised(props) {
  return (
    <div>
              <MyButton
      onClick={props.fetchPosts}
      >Получить посты</MyButton>
      <MyButton
        style={{marginTop: 30}}
        onClick={() => props.setModal(true)}
      >
        Создать пост
      </MyButton>
    </div>
  )
}

export default Memoised
