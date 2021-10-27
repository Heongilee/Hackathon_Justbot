# Hackathon_Justbot

### 프로젝트 개요 :scroll:
   
```
학과조교 서비스를 제공하는  AI 챗봇🦾 입니다.

Google Dialogflow를 활용하여 연계질문과 동의어에 대한 처리, 그리고 Speech-to-Text(STT)기능으로 
키보드 타이핑을 할 여건이 충분하지 않을경우 음성을 통한 챗봇과의 대화가 가능합니다.

주로 학과에서 많이 물어보는 질문과, 교수님에 관한 정보, 학과에 대한 정보 등을 알려주는 기능이 있습니다.

※ 2020년 제8회 세종대학교 SW·AI 해커톤 팀 '그저봇' 은상🥈 수상작
```
　
　
### Team member :sparkles:
<table>
  <tr height="140px">
    <td align="center" width="135px">
        <a href="https://github.com/portfolioExpert"><img height="100px" width="100px" src="https://avatars.githubusercontent.com/u/52316270?v=4"/></a>
        <br />
        <a href="https://github.com/portfolioExpert">portfolioExpert</a>
    </td>
    <td align="center" width="135px">
        <a href="https://github.com/weedsib123"><img height="100px" width="100px" src="https://avatars.githubusercontent.com/u/43855036?v=4"/></a>
        <br />
        <a href="https://github.com/weedsib123">weedsib123</a>
    </td>
    <td align="center" width="135px">
        <a href="https://github.com/Heongilee"><img height="100px" width="100px" src="https://avatars.githubusercontent.com/u/55871242?v=4"/></a>
        <br />
        <a href="https://github.com/Heongilee">Heongilee</a>
    </td>
  </tr>
  <tr height="50px">
    <td align="center">
      <p>프론트엔드 및 
        챗봇 모델 개발</p>
    </td>
    <td align="center">
      <p>백엔드 및 
        챗봇 모델 개발</p>
    </td>
    <td align="center">
      <p>프론트엔드 및 
        챗봇 모델 개발</p>
    </td>
  </tr>
</table>
　
   
### Tech stack :hammer_and_pick:

- Front-end : ![HTML5](https://img.shields.io/badge/HTML5-%20-%23E34F26?logo=HTML5) ![CSS3](https://img.shields.io/badge/CSS3-%20-%231572B6?logo=css3) ![Javascript](https://img.shields.io/badge/Javascript-%20-%23F7DF1E?logo=javascript)   
- Back-end : ![NodeJS](https://img.shields.io/badge/NodeJS-express%20server-%23339933?logo=Node.js) ![GoogleDialogflow](https://img.shields.io/badge/Google%20Dialogflow-NLP%20engine-%23FF9800?logo=Dialogflow)   
- OS : ![Windows](https://img.shields.io/badge/Windows-10-%230078D6?logo=windows)   
- IDE or Editor : ![vscode](https://img.shields.io/badge/vscode-%20-%23007ACC?logo=Visual%20Studio%20Code)   
- VCS : ![Github](https://img.shields.io/badge/Github-%23181717?logo=GitHub)
   

### Paper work 📝


|**시스템 아키텍처**|
|:----------:|
|![image](https://user-images.githubusercontent.com/55871242/139025658-b19364bd-bb46-4eca-b009-6ad70ee28839.png)|
   
### Demo :computer:
   
<table>
  <th align="center" width="405px">연계 질문에 대한 질의 응답 처리</th>
  <th align="center" width="405px">동의어 처리</th>
  <tr height="318px">
    <td align="center" width="405px">
      <img src="https://user-images.githubusercontent.com/55871242/129652593-0f869377-1225-4885-8cb0-691b2e73c7b2.png" width="400px" />
    </td>
    <td align="center" width="405px">
      <img src="https://user-images.githubusercontent.com/55871242/129662496-ec06937a-c204-4a19-8c1c-d86c3e7a4cad.png" width="400px" />
    </td>
  </tr>
  <tr height="50px">
    <td align="center" width="405px">
      <p>사용자 질문에 대해 챗봇은 질문에 대한 연계 프로세스를 가져갈 수 있습니다. 어느 특정 학과의 학과 행사에 대한 정보를 알고 싶을 경우 챗봇은 이어지는 질문들을 통해 사용자가 원하는 답에 도출하게 되고, 이어서 원하는 결과를 보여줍니다.</p>
    </td>
    <td align="center" width="405px">
      <p>Dialogflow에서 Entity는 사용자 질의에서 키워드 단위로 파라미터를 뽑아내는것을 말합니다. 한 가지 의미에 대해 여러 가지의 키워드들을 학습했기 때문에, 컴퓨터공학과의 줄임말인 '컴공'이라고 질의를 던져도 챗봇은 그에 맞는 응답을 할 수 있습니다.</p>
    </td>
  </tr>
</table>
　
<table>
  <th align="center" width="405px">학생들이 가장 많이 물어보았던 질문에 대한 응답</th>
  <th align="center" width="405px">STT (Speech-To-Text)</th>
  <tr height="318px">
    <td align="center" width="405px">
      <img src="https://user-images.githubusercontent.com/55871242/129662903-cc688e57-0b47-4fad-84d2-9be6ed83b6a0.png" width="400px" />
    </td>
    <td align="center" width="405px">
      <img src="https://github.com/Heongilee/Hackathon_Justbot/blob/master/public/asset/STT.gif?raw=true" width="400px" />
    </td>
  </tr>
  <tr height="50px">
    <td align="center" width="405px">
      <p>우리 학과 학생들이 가장 많이 물어보는 질문 중 하나인 타 학과 전공과목이 학점으로 인정되는지에 대한 부분을 명쾌하게 설명해줍니다.</p>
    </td>
    <td align="center" width="405px">
      <p>장치에 따라 키보드 자판이나 텍스트로 입력해야할 여건이 충분하지 못할 경우에는 장치에 연결된 마이크를 통해 사람의 음성을 텍스트로 변환하여 메시지창에 입력해주는 기능을 제공합니다.</p>
    </td>
  </tr>
</table>
