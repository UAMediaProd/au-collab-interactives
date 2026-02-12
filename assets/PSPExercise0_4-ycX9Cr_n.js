import{_ as e}from"./CodeTutorial-CyR3wzRq.js";import{c as i,o as t,e as n,d as s}from"./index-D1h9s9Qj.js";const o={steps:[{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem;">
                <p>Let's take a look at the more commonly misunderstood arithmetic operators: <code>%</code> (modulus) and <code>//</code> (floor division). </p>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p style="font-size: 1.2rem"><code>a % b = ??</code></p>
                        <p>The <code>%</code> operator is known as the modulus operator. It gives the integer remainder after division.</p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p style="font-size: 1.2rem"><code>8 % 3 = ??</code></p>
                        <p>Let's take a quick look at a few examples. 3 goes into 8 twice, with a remainder of 2: <code>(2 * 3) + 2 = 8</code></p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p style="font-size: 1.2rem"><code>8 % 3 = ??</code></p>
                        <p>Let's take a quick look at a few examples. 3 goes into 8 twice, with a remainder of 2: <code>(2 * 3) + <span class="inline-highlight">2</span> = 8</code></p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p style="font-size: 1.2rem"><code>8 % 3 = <span class="inline-highlight">??</span></code></p>
                        <p>Let's take a quick look at a few examples. 3 goes into 8 twice, with a remainder of 2: <code>(2 * 3) + <span class="inline-highlight">2</span> = 8</code></p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p style="font-size: 1.2rem"><code>8 % 3 = <span class="inline-highlight">2</span></code></p>
                        <p>Let's take a quick look at a few examples. 3 goes into 8 twice, with a remainder of 2: <code>(2 * 3) + 2 = 8</code></p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p style="font-size: 1.2rem"><code>9 % 3 = ??</code></p>
                        <p>In this example, 3 goes into 9 exactly 3 times (no remainder): <code>(3 * 3) + 0 = 9</code></p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p style="font-size: 1.2rem"><code>9 % 3 = ??</code></p>
                        <p>In this example, 3 goes into 9 exactly 3 times (no remainder): <code>(3 * 3) + <span class="inline-highlight">0</span> = 9</code></p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p style="font-size: 1.2rem"><code>9 % 3 = <span class="inline-highlight">??</span></code></p>
                        <p>In this example, 3 goes into 9 exactly 3 times (no remainder): <code>(3 * 3) + <span class="inline-highlight">0</span> = 9</code></p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p style="font-size: 1.2rem"><code>9 % 3 = <span class="inline-highlight">0</span></code></p>
                        <p>In this example, 3 goes into 9 exactly 3 times (no remainder): <code>(3 * 3) + 0 = 9</code></p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p><strong>Using <code>%</code> operator to check for divisibility:</strong></p>
                        <p>A very common use of the % operator is its use in the Boolean condition of an if statement to check one number for divisibility by another. This is done in the following way...</p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <pre class="inline-pre"><code class="language-python">if a % b == 0:
    print("a is divisible by b")</code></pre>
                        <p>This is because if <code>a % b == 0</code> is <code>True</code>, then the remainder after division (<code>a/b</code>) was zero. Therefore <code>a</code> is exactly divisible by <code>b</code>.</p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <pre class="inline-pre"><code class="language-python">if a % 10 == 0:
    print("a is divisible by 10")</code></pre>
                        <p>In this example we set <code>b = 10</code>. We can then test any integer <code>a</code> for divisibility by 10.</p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <pre class="inline-pre"><code class="language-python">if a % 2 == 0:
     print("a is even")
 else:
     print("a is odd")</code></pre>
                        <p>Here is another common use; we set <code>b = 2</code>. If
the result of the Boolean expression is zero, then <code>a</code> is divisible by 2 and hence is even.</p>
                        <p>Otherwise, we know there was a remainder of 1 and therefore <code>a</code> was odd.</p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p style="font-size: 1.2rem"><code>a // b = ??</code></p>
                        <p>The <code>//</code> operator is known as the floor division operator.</p>
                        <p>It performs normal division but discards any remainder.</p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p style="font-size: 1.2rem"><code>8 // 3 = ??</code></p>
                        <p>Let's take a quick look at a few examples. 3 goes into 8 twice. So the solution is 2: <code>(2 * 3) + 2 = 8</code></p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p style="font-size: 1.2rem"><code>8 // 3 = ??</code></p>
                        <p>Let's take a quick look at a few examples. 3 goes into 8 twice. So the solution is 2: <code>(<span class="inline-highlight">2</span> * 3) + 2 = 8</code></p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p style="font-size: 1.2rem"><code>8 // 3 = <span class="inline-highlight">??</span></code></p>
                        <p>Let's take a quick look at a few examples. 3 goes into 8 twice. So the solution is 2: <code>(<span class="inline-highlight">2</span> * 3) + 2 = 8</code></p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p style="font-size: 1.2rem"><code>8 // 3 = <span class="inline-highlight">2</span></code></p>
                        <p>Let's take a quick look at a few examples. 3 goes into 8 twice. So the solution is 2: <code>(2 * 3) + 2 = 8</code></p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p style="font-size: 1.2rem"><code>9 // 3 = ??</code></p>
                        <p>In this example, 3 goes into 9 exactly 3 times, so the solution is 3: <code>(3 * 3) + 0 = 9</code></p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p style="font-size: 1.2rem"><code>9 // 3 = ??</code></p>
                        <p>In this example, 3 goes into 9 exactly 3 times, so the solution is 3: <code>(<span class="inline-highlight">3</span> * 3) + 0 = 9</code></p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p style="font-size: 1.2rem"><code>9 // 3 = <span class="inline-highlight">??</span></code></p>
                        <p>In this example, 3 goes into 9 exactly 3 times, so the solution is 3: <code>(<span class="inline-highlight">3</span> * 3) + 0 = 9</code></p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p style="font-size: 1.2rem"><code>9 // 3 = <span class="inline-highlight">3</span></code></p>
                        <p>In this example, 3 goes into 9 exactly 3 times, so the solution is 3: <code>(3 * 3) + 0 = 9</code></p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p><strong>Using <code>//</code> is not the same thing as decimal rounding.</strong></p>
                        <p>The <code>//</code> operator is regular division, but with any remainder discarded.</p>
                        <p>That is, if we consider the decimal result after division, we get rid of everything after the decimal point.</p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <p>This is not the same thing as decimal rounding, which will round up or down to the nearest integer. An example will illustrate:</p>
                        <pre class="inline-pre"><code class="language-python">>>> 8/3
2.6666666666666665</code></pre>
                        <p>Entered directly into the shell here is the result of regular division <code>8/3</code>.</p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <pre class="inline-pre"><code class="language-python">>>> 8//3
2</code></pre>
                        <p>As seen previously, the result of <code>8//3</code> is <code>2</code>.</p>
                        <p>Everything after the decimal place has been discarded, even though the nearest integer to 2.666 is actually 3.</p>
                    </div>
            </div>
            `},{explanation:`
            <div style="display:flex; justify-content:center; align-items:center; min-height: 13rem; text-align:center;">
                    <div>
                        <pre class="inline-pre"><code class="language-python">>>> round(8/3)
3</code></pre>
                        <p>Here we use the inbuilt <code>round()</code> function to illustrate the difference. </p>
                        <p>The result of <code>8/3</code> is rounded to the nearest integer (in this instance, up) to 3.</p>
                    </div>
            </div>
            `}]},a={class:"container mx-auto p-4 max-w-[1024px]"},h={__name:"PSPExercise0_4",setup(l){return(d,c)=>(t(),i("div",a,[n(e,{tutorial:s(o),language:"python","show-code":!1,"show-boxes":!1},null,8,["tutorial"])]))}};export{h as default};
