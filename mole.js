/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-08-17 14:18:24
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-08-17 16:49:46
 * @FilePath: /mole_game/mole.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

window.onload=function(){
  setGame()
}

let currMoleTile;
let currPlant;
let score=0;
let gameOver=false;

function selectTile(){
  if (this==currMoleTile){
    score+=10
    document.getElementById('score').innerText=score.toString()
  }
  else if (this==currPlant){
    document.getElementById('score').innerText='Game Over'+' '+score.toString()
    gameOver=true
  }
}

function setGame(){
  for (let i=0;i<9;i++){
    let tile=document.createElement('div')
    tile.id=i.toString()
    tile.addEventListener('click',selectTile)
    document.getElementById("board").appendChild(tile)
  }

  setInterval(setMole,2000)
  setInterval(setPlant,1000)
}

function getRandomTile(){
  let num=Math.floor(Math.random()*9)
  return num.toString()
}

function setMole(){
  if (gameOver){
    return ''
  }
  if (currMoleTile){
    currMoleTile.innerHTML=''
  }
  let mole=document.createElement('img')
  mole.src='./monty-mole.png'
  let num=getRandomTile()
  if (currPlant&&currPlant.id==num){
    return
  }
  currMoleTile=document.getElementById(num)
  currMoleTile.appendChild(mole)
}

function setPlant(){
  if (gameOver){
    return ''
  }
  if (currPlant){
    currPlant.innerHTML=''
  }
  let plant=document.createElement('img')
  plant.src='./piranha-plant.png'

  let num=getRandomTile()
  if (currMoleTile && currMoleTile.id==num){
    return
  }
  currPlant=document.getElementById(num)
  currPlant.appendChild(plant)
}