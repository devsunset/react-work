import './App.css';
import ComponentJSXExample from './ComponentJSXExample';
import ComponentPropsExample from './ComponentPropsExample';
import ComponentStateExample from './ComponentStateExample';
import ComponentUseStateExample from './ComponentUseStateExample';
import ComponentClassEventExample from './ComponentClassEventExample';
import ComponentFunctionEventExample from './ComponentFunctionEventExample';
import ComponentRefExample from './ComponentRefExample';
import ComponentIterationExample from './ComponentIterationExample';
import ComponentLifeCycleExample from './ComponentLifeCycleExample';
import ComponentHooksExample from './ComponentHooksExample';
import ComponentStyleExample from './ComponentStyleExample';
import ComponentImmerExample from './ComponentImmerExample';
import ComponentAxiosExample from './ComponentAxiosExample';
import ComponentContextApiExample from './ComponentContextApiExample';
import { ColorProvider } from './contexts/color';
import SelectColors from './SelectColors';

function App() {
  return (
    <div style={{ padding: 16 }}>
      <hr />
      <h1>React Example</h1>
      <hr />
      <h2>JSX - ComponentJSXExample.js</h2>
      <ComponentJSXExample />
      <hr />
      <h2>Props - ComponentPropsExample.js</h2>
      <ComponentPropsExample name="React" />
      <ComponentPropsExample />
      <ComponentPropsExample>리액트</ComponentPropsExample>
      {/* 숫자를 입력하면 PropTypes string 으로 설정 했기 때문에 console 창에 에러 출력 */}
      {/* <ComponentPropsExample name={3} /> */}
      <hr />
      <h2>State - ComponentStateExample.js</h2>
      <ComponentStateExample />
      <hr />
      <h2>UseState - ComponentUseStateExample.js</h2>
      <ComponentUseStateExample />
      <hr />
      <h2>Event (Class) - ComponentClassEventExample.js</h2>
      <ComponentClassEventExample />
      <hr />
      <h2>Event (Function) - ComponentFunctionEventExample.js</h2>
      <ComponentFunctionEventExample />
      <hr />
      <h2>Ref - ComponentRefExample.js</h2>
      <ComponentRefExample />
      {/* Class 컴포넌트에서는 아래와 같이 Component에 ref 값으로 접근 가능 - 되도록
      사용 지양 현재 App.js는 함수형이라 아래구문 사용 X
      <ComponentRefExample ref={(ref) => (this.componentRefExample = ref)} />
      <button onClick={() => this.componentRefExample.handlerClick()} /> */}
      <hr />
      <h2>Iteration - ComponentIterationExample.js</h2>
      <ComponentIterationExample />

      <hr />
      <h2>LifeCycle - ComponentLifeCycleExample.js</h2>
      <ComponentLifeCycleExample />

      <hr />
      <h2>Hooks - ComponentHooksExample.js</h2>
      <ComponentHooksExample />

      <hr />
      <h2>Style - ComponentStyleExample.js</h2>
      <ComponentStyleExample />

      <hr />
      <h2>Performance- example/todo-app </h2>

      <hr />
      <h2>Immer - ComponentImmerExample.js</h2>
      <ComponentImmerExample />

      <hr />
      <h2>Router - example/router-app </h2>

      <hr />
      <h2>Axios - example/news-app & ComponentAxiosExample.js</h2>
      <ComponentAxiosExample />

      <hr />
      <h2>Context API - ComponentContextApiExample.js </h2>
      <ColorProvider>
        <div>
          <SelectColors />
          <ComponentContextApiExample />
        </div>
      </ColorProvider>

      <hr />
      <h2>Redux - example/vanilla-redux & example/redux-app</h2>

      <hr />
      <h2>Redux middleware - example/redux-middleware-app</h2>

      <hr />
      <h2>Code Splitting - example/code-splitting-app</h2>
      <div>React.lazy Suspense ( SSR X ) - Loadable Components (SSR O)</div>
      <div>https://loadable-components.com/docs/getting-started/</div>

      <hr />
      <h2>SSR - example/ssr-app & next.js & remix</h2>
      <div>Next.js - https://nextjs.org/</div>
      <div>Remix - https://remix.run/</div>
      <div>
        Next.js & Remix -
        https://junghan92.medium.com/remix-vs-next-js-d6428606d66e
      </div>
      <div>Razzle - https://razzlejs.org/</div>

      <hr />
      <h2>koa (node sever framework) - example/koa</h2>

      <hr />
      <h2>mongo (mongodb - mongoose) - example/mongo</h2>

      <hr />
      <h2>jwt - example/jwt</h2>

      <hr />
      <h2>mini project blog - example/bolg-backend , blog-frontend</h2>
    </div>
  );
}

export default App;
