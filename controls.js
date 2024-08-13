export function checkControls ({ mario, keys }) {
  const isMarioTouchinFloor = mario.body.touching.down
  const isLeftKeysDown = keys.left.isDown
  const isRightKeysDown = keys.right.isDown
  const isUpKeyDown = keys.up.isDown

  if (isLeftKeysDown) {
    isMarioTouchinFloor && mario.anims.play('mario-walk', true)
    mario.x -= 2
    mario.flipX = true
  } else if (isRightKeysDown) {
    isMarioTouchinFloor && mario.anims.play('mario-walk', true)
    mario.x += 2
    mario.flipX = false
  } else if (isMarioTouchinFloor) {
    mario.anims.play('mario-idle', true)
  }

  if (isUpKeyDown && isMarioTouchinFloor) {
    mario.setVelocityY(-300)
    mario.anims.play('mario-jump', true)
  }
}
