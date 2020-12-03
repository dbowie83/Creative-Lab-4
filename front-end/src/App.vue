     <template>
         <div id="app">
	<div class=" flex flex-col h-screen justify-between text-center">
		<div>
             <nav class="navbar navbar-expand-lg  bg-dark">

                 <router-link to="/" class="navbar-brand">
                     <h1 class="text-white">Social Media Site</h1>
                 </router-link>

                 <button class="navbar-toggler" type="button" data-toggle="collapse"
                     data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                     aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                 </button>

                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav ml-auto text-white">

			<li class="nav-item">
                             <router-link to="/admin" class="nav-link">
                                 <h2>New Post</h2>
                             </router-link>
                         </li>

                         <li class="nav-item">
                             <router-link to="/OldPosts" class="nav-link">
                                 <h2>Old Posts</h2>
                             </router-link>
                         </li>
                     </ul>
                 </div>
             </nav>
             <div class="content">
                 <router-view />
             </div>

	</div>
             <div class="footer bg-dark">
             
		<a href="https://github.com/dbowie83/Creative-Lab-4">View on GitHub</a>

		</div>
         </div>
     </template>




 <style>
     html {
         box-sizing: border-box;
     }

     body {
         font-family: 'Montserrat', sans-serif;
         font-size: 16px;
         background: #fff;
         padding: 0px;
         margin: 0px;
     }

     /* Header */
     .header {
         display: flex;
         padding: 10px 100px 0px 100px;
         background-color: #5BDEFF;
         color: #1C454F;
     }

     .title {
         margin-top: 5px;
     }

     .title h1 {
         font-size: 30px;
     }

     .content {
         padding: 20px 100px;
         min-height: 500px;
     }

     /* Footer */
     .footer {
         height: 50px;
         padding: 20px 100px 0px 100px;
         font-size: 12px;
     }

     .footer a {
         color: white;
     }

     h1 {
         font-size: 20px;
     }

     h2 {
         font-size: 14px;
     }
 </style>
