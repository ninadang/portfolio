




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>css-modal/modal.js at master · drublic/css-modal</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="drublic/css-modal" name="twitter:title" /><meta content="css-modal - A modal built out of pure CSS" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/502487?v=1&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/502487?v=1&amp;s=400" property="og:image" /><meta content="drublic/css-modal" property="og:title" /><meta content="https://github.com/drublic/css-modal" property="og:url" /><meta content="css-modal - A modal built out of pure CSS" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="46BBBD7D:6941:8692FC2:53DE75DC" name="octolytics-dimension-request_id" /><meta content="5552109" name="octolytics-actor-id" /><meta content="ninadang" name="octolytics-actor-login" /><meta content="7bc8fa0559c470703b57440ba59a88e48d265285407dffda5db155031eb161d7" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="euBWYcdI2oTI4MZ1bFMFEdOJ/cX5TJ1IDn9btL8HAxWScNOOa9DXY+zRXZiZskxSHQfVN4LQmFPzxPXH5eMIcg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-8488336393a59083828e685a8702f8734352719a.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-6f603f8712a3ad84b467294bd7ff80bafef0dfa6.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="b97903e118817dc3b1b23f8b995593f2">

      
  <meta name="description" content="css-modal - A modal built out of pure CSS">


  <meta content="502487" name="octolytics-dimension-user_id" /><meta content="drublic" name="octolytics-dimension-user_login" /><meta content="6820011" name="octolytics-dimension-repository_id" /><meta content="drublic/css-modal" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="6820011" name="octolytics-dimension-repository_network_root_id" /><meta content="drublic/css-modal" name="octolytics-dimension-repository_network_root_nwo" />

  <link href="https://github.com/drublic/css-modal/commits/master.atom" rel="alternate" title="Recent Commits to css-modal:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="ninadang"
    data-repo="drublic/css-modal"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="drublic/css-modal">

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked">
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global">
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    

<ul id="user-links">
  <li>
    <a href="/ninadang" class="name">
      <img alt="ninadang" data-user="5552109" height="20" src="https://avatars2.githubusercontent.com/u/5552109?v=1&amp;s=40" width="20" /> ninadang
    </a>
  </li>

  <li class="new-menu dropdown-toggle js-menu-container">
    <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-arrow"></span>
    </a>

    <div class="new-menu-content js-menu-content">
    </div>
  </li>

  <li>
    <a href="/settings/profile" id="account_settings"
      class="tooltipped tooltipped-s"
      aria-label="Account settings ">
      <span class="octicon octicon-tools"></span>
    </a>
  </li>
  <li>
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="3P3sHeEQItLb+uEQ6CSGi3b6vWRnzugVBYE070mXYv6h5yUkpeKJLx7ckbrEnj/IzBmQTBVGbzMo+nELyEiE8Q==" /></div>
      <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="https://porter.github.com/new"><span class="octicon octicon-move-right"></span> Import repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="drublic/css-modal">This repository</span>
    </li>
      <li>
        <a href="/drublic/css-modal/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="ZUXYf4obNjevddUEIjlwWaGanyMpDu9s39VI93XreggY0eXa77D/MMxC3Ax7taSnZPu978VdUMmzZaPYk4Mclg==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="6820011" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/drublic/css-modal/watchers">
        56
      </a>
      <a href="/drublic/css-modal/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    

  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/drublic/css-modal/unstar" class="js-toggler-form starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="5W9MfUK6W2Hpt3y68L7AVtZyMw5Qvo1O18+kz8Le/E/jAlpX/g9J+S6w27ZnJli7F9h7rRZvelSNFxPPDt4XRg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar drublic/css-modal">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/drublic/css-modal/stargazers">
          1,209
        </a>
</form>
    <form accept-charset="UTF-8" action="/drublic/css-modal/star" class="js-toggler-form unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="nOAEeWZX0YThvyCSm21O5IPitZpjoOQnmF34WfmNkpTSoBSKvy2oQIHhd10n8douhzLym6rLk47GVfVXia2z5A==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star drublic/css-modal">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/drublic/css-modal/stargazers">
          1,209
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/drublic/css-modal/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of drublic/css-modal to your account" aria-label="Fork your own copy of drublic/css-modal to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/drublic/css-modal/network" class="social-count">188</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/drublic" class="url fn" itemprop="url" rel="author"><span itemprop="title">drublic</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/drublic/css-modal" class="js-current-repository js-repo-home-link">css-modal</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/drublic/css-modal/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/drublic/css-modal" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /drublic/css-modal">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/drublic/css-modal/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /drublic/css-modal/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/drublic/css-modal/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /drublic/css-modal/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/drublic/css-modal/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /drublic/css-modal/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/drublic/css-modal/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /drublic/css-modal/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/drublic/css-modal/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /drublic/css-modal/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/drublic/css-modal.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/drublic/css-modal.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:drublic/css-modal.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:drublic/css-modal.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/drublic/css-modal" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/drublic/css-modal" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save drublic/css-modal to your computer and use it in GitHub Desktop." aria-label="Save drublic/css-modal to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/drublic/css-modal/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download drublic/css-modal as a zip file"
                   title="Download drublic/css-modal as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/drublic/css-modal/blob/e51f392174f2e55c56266bd72992034295a9bab6/modal.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:606a5322c8f41757b962081259bd7b39 -->

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/blob/gh-pages/modal.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/blob/gh-pages-dev/modal.js"
                 data-name="gh-pages-dev"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages-dev">gh-pages-dev</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/blob/less/modal.js"
                 data-name="less"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="less">less</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/blob/master/modal.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.1.8/modal.js"
                 data-name="v1.1.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.8">v1.1.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.1.7/modal.js"
                 data-name="v1.1.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.7">v1.1.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.1.6/modal.js"
                 data-name="v1.1.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.6">v1.1.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.1.5/modal.js"
                 data-name="v1.1.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.5">v1.1.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.1.4/modal.js"
                 data-name="v1.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.4">v1.1.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.1.3/modal.js"
                 data-name="v1.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.3">v1.1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.1.2/modal.js"
                 data-name="v1.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.2">v1.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.1.1/modal.js"
                 data-name="v1.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.1">v1.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.1.0-beta6/modal.js"
                 data-name="v1.1.0-beta6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0-beta6">v1.1.0-beta6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.1.0-beta5/modal.js"
                 data-name="v1.1.0-beta5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0-beta5">v1.1.0-beta5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.1.0beta4/modal.js"
                 data-name="v1.1.0beta4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0beta4">v1.1.0beta4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.1.0beta3/modal.js"
                 data-name="v1.1.0beta3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0beta3">v1.1.0beta3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.1.0beta2/modal.js"
                 data-name="v1.1.0beta2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0beta2">v1.1.0beta2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.1.0beta1/modal.js"
                 data-name="v1.1.0beta1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0beta1">v1.1.0beta1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.1.0beta/modal.js"
                 data-name="v1.1.0beta"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0beta">v1.1.0beta</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.1.0alpha/modal.js"
                 data-name="v1.1.0alpha"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0alpha">v1.1.0alpha</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.1.0/modal.js"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.0.4/modal.js"
                 data-name="v1.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.4">v1.0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.0.3/modal.js"
                 data-name="v1.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.3">v1.0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.0.2/modal.js"
                 data-name="v1.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.2">v1.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.0.1/modal.js"
                 data-name="v1.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.1">v1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/drublic/css-modal/tree/v1.0.0/modal.js"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/drublic/css-modal/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="modal.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/drublic/css-modal" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">css-modal</span></a></span></span><span class="separator"> / </span><strong class="final-path">modal.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Hans Christian Reinl" class="main-avatar js-avatar" data-user="502487" height="24" src="https://avatars0.githubusercontent.com/u/502487?s=140" width="24" />
      <span class="author"><a href="/drublic" rel="author">drublic</a></span>
      <time datetime="2014-06-20T13:02:41+02:00" is="relative-time">June 20, 2014</time>
      <div class="commit-title">
          <a href="/drublic/css-modal/commit/20c9e1c221cd84461d4a5a028042e3051cf358af" class="message" data-pjax="true" title="Add document.createEvent for creating events in oldIE">Add document.createEvent for creating events in oldIE</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>10</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="drublic" href="/drublic/css-modal/commits/master/modal.js?author=drublic"><img alt="Hans Christian Reinl" class=" js-avatar" data-user="502487" height="20" src="https://avatars0.githubusercontent.com/u/502487?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="jonathanweiss" href="/drublic/css-modal/commits/master/modal.js?author=jonathanweiss"><img alt="Jonathan Weiß" class=" js-avatar" data-user="39352" height="20" src="https://avatars2.githubusercontent.com/u/39352?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="anselmh" href="/drublic/css-modal/commits/master/modal.js?author=anselmh"><img alt="Anselm Hannemann" class=" js-avatar" data-user="399345" height="20" src="https://avatars1.githubusercontent.com/u/399345?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="Schepp" href="/drublic/css-modal/commits/master/modal.js?author=Schepp"><img alt="Christian Schaefer" class=" js-avatar" data-user="135141" height="20" src="https://avatars1.githubusercontent.com/u/135141?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="realmyst" href="/drublic/css-modal/commits/master/modal.js?author=realmyst"><img alt="Alexander Shcherbinin" class=" js-avatar" data-user="124079" height="20" src="https://avatars0.githubusercontent.com/u/124079?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="fabien-d" href="/drublic/css-modal/commits/master/modal.js?author=fabien-d"><img alt="Fabien Doiron" class=" js-avatar" data-user="747616" height="20" src="https://avatars0.githubusercontent.com/u/747616?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="sylvaincombes" href="/drublic/css-modal/commits/master/modal.js?author=sylvaincombes"><img alt="sylvaincombes" class=" js-avatar" data-user="326906" height="20" src="https://avatars1.githubusercontent.com/u/326906?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="tzi" href="/drublic/css-modal/commits/master/modal.js?author=tzi"><img alt="Thomas ZILLIOX" class=" js-avatar" data-user="415891" height="20" src="https://avatars2.githubusercontent.com/u/415891?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="anselm-urban" href="/drublic/css-modal/commits/master/modal.js?author=anselm-urban"><img alt="Anselm Urban" class=" js-avatar" data-user="820660" height="20" src="https://avatars0.githubusercontent.com/u/820660?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="4nduril" href="/drublic/css-modal/commits/master/modal.js?author=4nduril"><img alt="Tobias Barth" class=" js-avatar" data-user="869387" height="20" src="https://avatars3.githubusercontent.com/u/869387?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Hans Christian Reinl" class=" js-avatar" data-user="502487" height="24" src="https://avatars0.githubusercontent.com/u/502487?s=140" width="24" />
            <a href="/drublic">drublic</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jonathan Weiß" class=" js-avatar" data-user="39352" height="24" src="https://avatars2.githubusercontent.com/u/39352?s=140" width="24" />
            <a href="/jonathanweiss">jonathanweiss</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Anselm Hannemann" class=" js-avatar" data-user="399345" height="24" src="https://avatars1.githubusercontent.com/u/399345?s=140" width="24" />
            <a href="/anselmh">anselmh</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Christian Schaefer" class=" js-avatar" data-user="135141" height="24" src="https://avatars1.githubusercontent.com/u/135141?s=140" width="24" />
            <a href="/Schepp">Schepp</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Alexander Shcherbinin" class=" js-avatar" data-user="124079" height="24" src="https://avatars0.githubusercontent.com/u/124079?s=140" width="24" />
            <a href="/realmyst">realmyst</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Fabien Doiron" class=" js-avatar" data-user="747616" height="24" src="https://avatars0.githubusercontent.com/u/747616?s=140" width="24" />
            <a href="/fabien-d">fabien-d</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="sylvaincombes" class=" js-avatar" data-user="326906" height="24" src="https://avatars1.githubusercontent.com/u/326906?s=140" width="24" />
            <a href="/sylvaincombes">sylvaincombes</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Thomas ZILLIOX" class=" js-avatar" data-user="415891" height="24" src="https://avatars2.githubusercontent.com/u/415891?s=140" width="24" />
            <a href="/tzi">tzi</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Anselm Urban" class=" js-avatar" data-user="820660" height="24" src="https://avatars0.githubusercontent.com/u/820660?s=140" width="24" />
            <a href="/anselm-urban">anselm-urban</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Tobias Barth" class=" js-avatar" data-user="869387" height="24" src="https://avatars3.githubusercontent.com/u/869387?s=140" width="24" />
            <a href="/4nduril">4nduril</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>407 lines (323 sloc)</span>
          <span class="meta-divider"></span>
        <span>10.412 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/drublic/css-modal/raw/master/modal.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/drublic/css-modal/blame/master/modal.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/drublic/css-modal/commits/master/modal.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/drublic/css-modal/edit/master/modal.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/drublic/css-modal/delete/master/modal.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm"> * CSS Modal</span></div><div class='line' id='LC3'><span class="cm"> * http://drublic.github.com/css-modal</span></div><div class='line' id='LC4'><span class="cm"> *</span></div><div class='line' id='LC5'><span class="cm"> * @author Hans Christian Reinl - @drublic</span></div><div class='line' id='LC6'><span class="cm"> */</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">global</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'>	<span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'>	<span class="cm">/*</span></div><div class='line' id='LC13'><span class="cm">	 * Storage for functions and attributes</span></div><div class='line' id='LC14'><span class="cm">	 */</span></div><div class='line' id='LC15'>	<span class="kd">var</span> <span class="nx">modal</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC16'><br/></div><div class='line' id='LC17'>		<span class="nx">activeElement</span><span class="o">:</span> <span class="kc">undefined</span><span class="p">,</span> <span class="c1">// Store for currently active element</span></div><div class='line' id='LC18'>		<span class="nx">lastActive</span><span class="o">:</span> <span class="kc">undefined</span><span class="p">,</span> <span class="c1">// Store for last active elemet</span></div><div class='line' id='LC19'>		<span class="nx">stackedElements</span><span class="o">:</span> <span class="p">[],</span> <span class="c1">// Store for stacked elements</span></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'>		<span class="c1">// All elements that can get focus, can be tabbed in a modal</span></div><div class='line' id='LC22'>		<span class="nx">tabbableElements</span><span class="o">:</span> <span class="s1">&#39;a[href], area[href], input:not([disabled]),&#39;</span> <span class="o">+</span></div><div class='line' id='LC23'>			<span class="s1">&#39;select:not([disabled]), textarea:not([disabled]),&#39;</span> <span class="o">+</span></div><div class='line' id='LC24'>			<span class="s1">&#39;button:not([disabled]), iframe, object, embed, *[tabindex],&#39;</span> <span class="o">+</span></div><div class='line' id='LC25'>			<span class="s1">&#39;*[contenteditable]&#39;</span><span class="p">,</span></div><div class='line' id='LC26'><br/></div><div class='line' id='LC27'>		<span class="cm">/*</span></div><div class='line' id='LC28'><span class="cm">		 * Polyfill addEventListener for IE8 (only very basic)</span></div><div class='line' id='LC29'><span class="cm">		 * @param event {string} event type</span></div><div class='line' id='LC30'><span class="cm">		 * @param element {Node} node to fire event on</span></div><div class='line' id='LC31'><span class="cm">		 * @param callback {function} gets fired if event is triggered</span></div><div class='line' id='LC32'><span class="cm">		 */</span></div><div class='line' id='LC33'>		<span class="nx">on</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">event</span> <span class="o">!==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC36'>				<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Type error: `error` has to be a string&#39;</span><span class="p">);</span></div><div class='line' id='LC37'>			<span class="p">}</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">callback</span> <span class="o">!==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC40'>				<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Type error: `callback` has to be a function&#39;</span><span class="p">);</span></div><div class='line' id='LC41'>			<span class="p">}</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC44'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC45'>			<span class="p">}</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>			<span class="c1">// Default way to support events</span></div><div class='line' id='LC48'>			<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;addEventListener&#39;</span> <span class="k">in</span> <span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC49'>				<span class="nx">element</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">callback</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>			<span class="c1">// If the event is a hashchange</span></div><div class='line' id='LC52'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">event</span> <span class="o">===</span> <span class="s1">&#39;hashchange&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">element</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC53'>				<span class="nx">element</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s1">&#39;on&#39;</span> <span class="o">+</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'>			<span class="c1">// If the event is not a haschange and bean is supported</span></div><div class='line' id='LC56'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC57'>				<span class="nx">bean</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC58'>			<span class="p">}</span></div><div class='line' id='LC59'>		<span class="p">},</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'>		<span class="cm">/*</span></div><div class='line' id='LC62'><span class="cm">		 * Convenience function to trigger event</span></div><div class='line' id='LC63'><span class="cm">		 * @param event {string} event type</span></div><div class='line' id='LC64'><span class="cm">		 * @param modal {string} id of modal that the event is triggered on</span></div><div class='line' id='LC65'><span class="cm">		 */</span></div><div class='line' id='LC66'>		<span class="nx">trigger</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">modal</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC67'>			<span class="kd">var</span> <span class="nx">eventTrigger</span><span class="p">;</span></div><div class='line' id='LC68'>			<span class="kd">var</span> <span class="nx">eventParams</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC69'>				<span class="nx">detail</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC70'>					<span class="s1">&#39;modal&#39;</span><span class="o">:</span> <span class="nx">modal</span></div><div class='line' id='LC71'>				<span class="p">}</span></div><div class='line' id='LC72'>			<span class="p">};</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>			<span class="c1">// Use the bean library to fire the event if it is included</span></div><div class='line' id='LC75'>			<span class="k">if</span> <span class="p">(</span><span class="nx">global</span><span class="p">.</span><span class="nx">bean</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC76'>				<span class="nx">bean</span><span class="p">.</span><span class="nx">fire</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">event</span><span class="p">,</span> <span class="nx">eventParams</span><span class="p">);</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'>			<span class="c1">// Use createEvent if supported (that&#39;s mostly the case)</span></div><div class='line' id='LC79'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">createEvent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC80'>				<span class="nx">eventTrigger</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createEvent</span><span class="p">(</span><span class="s1">&#39;CustomEvent&#39;</span><span class="p">);</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'>				<span class="nx">eventTrigger</span><span class="p">.</span><span class="nx">initCustomEvent</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="kc">false</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC83'>					<span class="s1">&#39;modal&#39;</span><span class="o">:</span> <span class="nx">modal</span></div><div class='line' id='LC84'>				<span class="p">});</span></div><div class='line' id='LC85'><br/></div><div class='line' id='LC86'>				<span class="nb">document</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span><span class="nx">eventTrigger</span><span class="p">);</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'>			<span class="c1">// Use CustomEvents if supported</span></div><div class='line' id='LC89'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC90'>				<span class="nx">eventTrigger</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CustomEvent</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">eventParams</span><span class="p">);</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'>				<span class="nb">document</span><span class="p">.</span><span class="nx">dispatchEvent</span><span class="p">(</span><span class="nx">eventTrigger</span><span class="p">);</span></div><div class='line' id='LC93'>			<span class="p">}</span></div><div class='line' id='LC94'>		<span class="p">},</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'>		<span class="cm">/*</span></div><div class='line' id='LC97'><span class="cm">		 * Convenience function to add a class to an element</span></div><div class='line' id='LC98'><span class="cm">		 * @param element {Node} element to add class to</span></div><div class='line' id='LC99'><span class="cm">		 * @param className {string}</span></div><div class='line' id='LC100'><span class="cm">		 */</span></div><div class='line' id='LC101'>		<span class="nx">addClass</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">className</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC102'>			<span class="k">if</span> <span class="p">(</span><span class="nx">element</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">element</span><span class="p">.</span><span class="nx">className</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">className</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC103'>				<span class="nx">element</span><span class="p">.</span><span class="nx">className</span> <span class="o">+=</span> <span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="nx">className</span><span class="p">;</span></div><div class='line' id='LC104'>			<span class="p">}</span></div><div class='line' id='LC105'>		<span class="p">},</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>		<span class="cm">/*</span></div><div class='line' id='LC108'><span class="cm">		 * Convenience function to remove a class from an element</span></div><div class='line' id='LC109'><span class="cm">		 * @param element {Node} element to remove class off</span></div><div class='line' id='LC110'><span class="cm">		 * @param className {string}</span></div><div class='line' id='LC111'><span class="cm">		 */</span></div><div class='line' id='LC112'>		<span class="nx">removeClass</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">className</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC113'>			<span class="nx">element</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">className</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">className</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="s1">&#39;  &#39;</span><span class="p">,</span> <span class="s1">&#39; &#39;</span><span class="p">);</span></div><div class='line' id='LC114'>		<span class="p">},</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>		<span class="cm">/**</span></div><div class='line' id='LC117'><span class="cm">		 * Convenience function to check if an element has a class</span></div><div class='line' id='LC118'><span class="cm">		 * @param  {Node}    element   Element to check classname on</span></div><div class='line' id='LC119'><span class="cm">		 * @param  {string}  className Class name to check for</span></div><div class='line' id='LC120'><span class="cm">		 * @return {Boolean}           true, if class is available on modal</span></div><div class='line' id='LC121'><span class="cm">		 */</span></div><div class='line' id='LC122'>		<span class="nx">hasClass</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">className</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC123'>			<span class="k">return</span> <span class="o">!!</span><span class="nx">element</span><span class="p">.</span><span class="nx">className</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">className</span><span class="p">);</span></div><div class='line' id='LC124'>		<span class="p">},</span></div><div class='line' id='LC125'><br/></div><div class='line' id='LC126'>		<span class="cm">/*</span></div><div class='line' id='LC127'><span class="cm">		 * Focus modal</span></div><div class='line' id='LC128'><span class="cm">		 */</span></div><div class='line' id='LC129'>		<span class="nx">setFocus</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC130'>			<span class="k">if</span> <span class="p">(</span><span class="nx">modal</span><span class="p">.</span><span class="nx">activeElement</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC131'><br/></div><div class='line' id='LC132'>				<span class="c1">// Set element with last focus</span></div><div class='line' id='LC133'>				<span class="nx">modal</span><span class="p">.</span><span class="nx">lastActive</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">activeElement</span><span class="p">;</span></div><div class='line' id='LC134'><br/></div><div class='line' id='LC135'>				<span class="c1">// New focussing</span></div><div class='line' id='LC136'>				<span class="nx">modal</span><span class="p">.</span><span class="nx">activeElement</span><span class="p">.</span><span class="nx">focus</span><span class="p">();</span></div><div class='line' id='LC137'><br/></div><div class='line' id='LC138'>				<span class="c1">// Add handler to keep the focus</span></div><div class='line' id='LC139'>				<span class="nx">modal</span><span class="p">.</span><span class="nx">keepFocus</span><span class="p">(</span><span class="nx">modal</span><span class="p">.</span><span class="nx">activeElement</span><span class="p">);</span></div><div class='line' id='LC140'>			<span class="p">}</span></div><div class='line' id='LC141'>		<span class="p">},</span></div><div class='line' id='LC142'><br/></div><div class='line' id='LC143'>		<span class="cm">/*</span></div><div class='line' id='LC144'><span class="cm">		 * Unfocus</span></div><div class='line' id='LC145'><span class="cm">		 */</span></div><div class='line' id='LC146'>		<span class="nx">removeFocus</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC147'>			<span class="k">if</span> <span class="p">(</span><span class="nx">modal</span><span class="p">.</span><span class="nx">lastActive</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC148'>				<span class="nx">modal</span><span class="p">.</span><span class="nx">lastActive</span><span class="p">.</span><span class="nx">focus</span><span class="p">();</span></div><div class='line' id='LC149'>			<span class="p">}</span></div><div class='line' id='LC150'>		<span class="p">},</span></div><div class='line' id='LC151'><br/></div><div class='line' id='LC152'>		<span class="cm">/*</span></div><div class='line' id='LC153'><span class="cm">		 * Keep focus inside the modal</span></div><div class='line' id='LC154'><span class="cm">		 * @param element {node} element to keep focus in</span></div><div class='line' id='LC155'><span class="cm">		 */</span></div><div class='line' id='LC156'>		<span class="nx">keepFocus</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC157'>			<span class="kd">var</span> <span class="nx">allTabbableElements</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC158'><br/></div><div class='line' id='LC159'>			<span class="c1">// Don&#39;t keep the focus if the browser is unable to support</span></div><div class='line' id='LC160'>			<span class="c1">// CSS3 selectors</span></div><div class='line' id='LC161'>			<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC162'>				<span class="nx">allTabbableElements</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">(</span><span class="nx">modal</span><span class="p">.</span><span class="nx">tabbableElements</span><span class="p">);</span></div><div class='line' id='LC163'>			<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">ex</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC164'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC165'>			<span class="p">}</span></div><div class='line' id='LC166'><br/></div><div class='line' id='LC167'>			<span class="kd">var</span> <span class="nx">firstTabbableElement</span> <span class="o">=</span> <span class="nx">allTabbableElements</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC168'>			<span class="kd">var</span> <span class="nx">lastTabbableElement</span> <span class="o">=</span> <span class="nx">allTabbableElements</span><span class="p">[</span><span class="nx">allTabbableElements</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>			<span class="kd">var</span> <span class="nx">focusHandler</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC171'>				<span class="kd">var</span> <span class="nx">keyCode</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">which</span> <span class="o">||</span> <span class="nx">event</span><span class="p">.</span><span class="nx">keyCode</span><span class="p">;</span></div><div class='line' id='LC172'><br/></div><div class='line' id='LC173'>				<span class="c1">// TAB pressed</span></div><div class='line' id='LC174'>				<span class="k">if</span> <span class="p">(</span><span class="nx">keyCode</span> <span class="o">!==</span> <span class="mi">9</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC175'>					<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC176'>				<span class="p">}</span></div><div class='line' id='LC177'><br/></div><div class='line' id='LC178'>				<span class="c1">// Polyfill to prevent the default behavior of events</span></div><div class='line' id='LC179'>				<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span> <span class="o">||</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC180'>					<span class="nx">event</span><span class="p">.</span><span class="nx">returnValue</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC181'>				<span class="p">};</span></div><div class='line' id='LC182'><br/></div><div class='line' id='LC183'>				<span class="c1">// Move focus to first element that can be tabbed if Shift isn&#39;t used</span></div><div class='line' id='LC184'>				<span class="k">if</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span> <span class="o">===</span> <span class="nx">lastTabbableElement</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">event</span><span class="p">.</span><span class="nx">shiftKey</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC185'>					<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC186'>					<span class="nx">firstTabbableElement</span><span class="p">.</span><span class="nx">focus</span><span class="p">();</span></div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'>				<span class="c1">// Move focus to last element that can be tabbed if Shift is used</span></div><div class='line' id='LC189'>				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span> <span class="o">===</span> <span class="nx">firstTabbableElement</span> <span class="o">&amp;&amp;</span> <span class="nx">event</span><span class="p">.</span><span class="nx">shiftKey</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC190'>					<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC191'>					<span class="nx">lastTabbableElement</span><span class="p">.</span><span class="nx">focus</span><span class="p">();</span></div><div class='line' id='LC192'>				<span class="p">}</span></div><div class='line' id='LC193'>			<span class="p">};</span></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'>			<span class="nx">modal</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;keydown&#39;</span><span class="p">,</span> <span class="nx">element</span><span class="p">,</span> <span class="nx">focusHandler</span><span class="p">);</span></div><div class='line' id='LC196'>		<span class="p">},</span></div><div class='line' id='LC197'><br/></div><div class='line' id='LC198'>		<span class="cm">/*</span></div><div class='line' id='LC199'><span class="cm">		 * Mark modal as active</span></div><div class='line' id='LC200'><span class="cm">		 * @param element {Node} element to set active</span></div><div class='line' id='LC201'><span class="cm">		 */</span></div><div class='line' id='LC202'>		<span class="nx">setActive</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC203'>			<span class="nx">modal</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="s1">&#39;is-active&#39;</span><span class="p">);</span></div><div class='line' id='LC204'>			<span class="nx">modal</span><span class="p">.</span><span class="nx">activeElement</span> <span class="o">=</span> <span class="nx">element</span><span class="p">;</span></div><div class='line' id='LC205'><br/></div><div class='line' id='LC206'>			<span class="c1">// Update aria-hidden</span></div><div class='line' id='LC207'>			<span class="nx">modal</span><span class="p">.</span><span class="nx">activeElement</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s1">&#39;aria-hidden&#39;</span><span class="p">,</span> <span class="s1">&#39;false&#39;</span><span class="p">);</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'>			<span class="c1">// Set the focus to the modal</span></div><div class='line' id='LC210'>			<span class="nx">modal</span><span class="p">.</span><span class="nx">setFocus</span><span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">id</span><span class="p">);</span></div><div class='line' id='LC211'><br/></div><div class='line' id='LC212'>			<span class="c1">// Fire an event</span></div><div class='line' id='LC213'>			<span class="nx">modal</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;cssmodal:show&#39;</span><span class="p">,</span> <span class="nx">modal</span><span class="p">.</span><span class="nx">activeElement</span><span class="p">);</span></div><div class='line' id='LC214'>		<span class="p">},</span></div><div class='line' id='LC215'><br/></div><div class='line' id='LC216'>		<span class="cm">/*</span></div><div class='line' id='LC217'><span class="cm">		 * Unset previous active modal</span></div><div class='line' id='LC218'><span class="cm">		 * @param isStacked {boolean} true if element is stacked above another</span></div><div class='line' id='LC219'><span class="cm">		 */</span></div><div class='line' id='LC220'>		<span class="nx">unsetActive</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">isStacked</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC221'>			<span class="k">if</span> <span class="p">(</span><span class="nx">modal</span><span class="p">.</span><span class="nx">activeElement</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC222'>				<span class="nx">modal</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">modal</span><span class="p">.</span><span class="nx">activeElement</span><span class="p">,</span> <span class="s1">&#39;is-active&#39;</span><span class="p">);</span></div><div class='line' id='LC223'><br/></div><div class='line' id='LC224'>				<span class="c1">// Fire an event</span></div><div class='line' id='LC225'>				<span class="nx">modal</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;cssmodal:hide&#39;</span><span class="p">,</span> <span class="nx">modal</span><span class="p">.</span><span class="nx">activeElement</span><span class="p">);</span></div><div class='line' id='LC226'><br/></div><div class='line' id='LC227'>				<span class="c1">// Update aria-hidden</span></div><div class='line' id='LC228'>				<span class="nx">modal</span><span class="p">.</span><span class="nx">activeElement</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s1">&#39;aria-hidden&#39;</span><span class="p">,</span> <span class="s1">&#39;true&#39;</span><span class="p">);</span></div><div class='line' id='LC229'><br/></div><div class='line' id='LC230'>				<span class="c1">// Unfocus</span></div><div class='line' id='LC231'>				<span class="nx">modal</span><span class="p">.</span><span class="nx">removeFocus</span><span class="p">();</span></div><div class='line' id='LC232'><br/></div><div class='line' id='LC233'>				<span class="c1">// Make modal stacked if needed</span></div><div class='line' id='LC234'>				<span class="k">if</span> <span class="p">(</span><span class="nx">isStacked</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC235'>					<span class="nx">modal</span><span class="p">.</span><span class="nx">stackModal</span><span class="p">(</span><span class="nx">modal</span><span class="p">.</span><span class="nx">activeElement</span><span class="p">);</span></div><div class='line' id='LC236'>				<span class="p">}</span></div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'>				<span class="c1">// If there are any stacked elements</span></div><div class='line' id='LC239'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isStacked</span> <span class="o">&amp;&amp;</span> <span class="nx">modal</span><span class="p">.</span><span class="nx">stackedElements</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC240'>					<span class="nx">modal</span><span class="p">.</span><span class="nx">unstackModal</span><span class="p">();</span></div><div class='line' id='LC241'>				<span class="p">}</span></div><div class='line' id='LC242'><br/></div><div class='line' id='LC243'>				<span class="c1">// Reset active element</span></div><div class='line' id='LC244'>				<span class="nx">modal</span><span class="p">.</span><span class="nx">activeElement</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC245'>			<span class="p">}</span></div><div class='line' id='LC246'>		<span class="p">},</span></div><div class='line' id='LC247'><br/></div><div class='line' id='LC248'>		<span class="cm">/*</span></div><div class='line' id='LC249'><span class="cm">		 * Stackable modal</span></div><div class='line' id='LC250'><span class="cm">		 * @param stackableModal {node} element to be stacked</span></div><div class='line' id='LC251'><span class="cm">		 */</span></div><div class='line' id='LC252'>		<span class="nx">stackModal</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">stackableModal</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC253'>			<span class="nx">modal</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">stackableModal</span><span class="p">,</span> <span class="s1">&#39;is-stacked&#39;</span><span class="p">);</span></div><div class='line' id='LC254'><br/></div><div class='line' id='LC255'>			<span class="c1">// Set modal as stacked</span></div><div class='line' id='LC256'>			<span class="nx">modal</span><span class="p">.</span><span class="nx">stackedElements</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">modal</span><span class="p">.</span><span class="nx">activeElement</span><span class="p">);</span></div><div class='line' id='LC257'>		<span class="p">},</span></div><div class='line' id='LC258'><br/></div><div class='line' id='LC259'>		<span class="cm">/*</span></div><div class='line' id='LC260'><span class="cm">		 * Reactivate stacked modal</span></div><div class='line' id='LC261'><span class="cm">		 */</span></div><div class='line' id='LC262'>		<span class="nx">unstackModal</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC263'>			<span class="kd">var</span> <span class="nx">stackedCount</span> <span class="o">=</span> <span class="nx">modal</span><span class="p">.</span><span class="nx">stackedElements</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC264'>			<span class="kd">var</span> <span class="nx">lastStacked</span> <span class="o">=</span> <span class="nx">modal</span><span class="p">.</span><span class="nx">stackedElements</span><span class="p">[</span><span class="nx">stackedCount</span> <span class="o">-</span> <span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC265'><br/></div><div class='line' id='LC266'>			<span class="nx">modal</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">lastStacked</span><span class="p">,</span> <span class="s1">&#39;is-stacked&#39;</span><span class="p">);</span></div><div class='line' id='LC267'><br/></div><div class='line' id='LC268'>			<span class="c1">// Set hash to modal, activates the modal automatically</span></div><div class='line' id='LC269'>			<span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span> <span class="o">=</span> <span class="nx">lastStacked</span><span class="p">.</span><span class="nx">id</span><span class="p">;</span></div><div class='line' id='LC270'><br/></div><div class='line' id='LC271'>			<span class="c1">// Remove modal from stackedElements array</span></div><div class='line' id='LC272'>			<span class="nx">modal</span><span class="p">.</span><span class="nx">stackedElements</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">stackedCount</span> <span class="o">-</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC273'>		<span class="p">},</span></div><div class='line' id='LC274'><br/></div><div class='line' id='LC275'>		<span class="cm">/*</span></div><div class='line' id='LC276'><span class="cm">		 * When displaying modal, prevent background from scrolling</span></div><div class='line' id='LC277'><span class="cm">		 * @param  {Object} event The incoming hashChange event</span></div><div class='line' id='LC278'><span class="cm">		 * @return {void}</span></div><div class='line' id='LC279'><span class="cm">		 */</span></div><div class='line' id='LC280'>		<span class="nx">mainHandler</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC281'>			<span class="kd">var</span> <span class="nx">hash</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="s1">&#39;#&#39;</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC282'>			<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC283'>			<span class="kd">var</span> <span class="nx">tmp</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC284'>			<span class="kd">var</span> <span class="nx">modalElement</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">hash</span><span class="p">);</span></div><div class='line' id='LC285'>			<span class="kd">var</span> <span class="nx">modalChild</span><span class="p">;</span></div><div class='line' id='LC286'><br/></div><div class='line' id='LC287'>			<span class="c1">// Check if the hash contains an index</span></div><div class='line' id='LC288'>			<span class="k">if</span> <span class="p">(</span><span class="nx">hash</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">)</span> <span class="o">!==</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC289'>				<span class="nx">tmp</span> <span class="o">=</span> <span class="nx">hash</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">);</span></div><div class='line' id='LC290'>				<span class="nx">index</span> <span class="o">=</span> <span class="nx">tmp</span><span class="p">.</span><span class="nx">pop</span><span class="p">();</span></div><div class='line' id='LC291'>				<span class="nx">hash</span> <span class="o">=</span> <span class="nx">tmp</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">);</span></div><div class='line' id='LC292'><br/></div><div class='line' id='LC293'>				<span class="c1">// Remove the index from the hash...</span></div><div class='line' id='LC294'>				<span class="nx">modalElement</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="nx">hash</span><span class="p">);</span></div><div class='line' id='LC295'><br/></div><div class='line' id='LC296'>				<span class="c1">// ... and store the index as a number on the element to</span></div><div class='line' id='LC297'>				<span class="c1">// make it accessible for plugins</span></div><div class='line' id='LC298'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">modalElement</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC299'>					<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;ReferenceError: element &quot;&#39;</span> <span class="o">+</span> <span class="nx">hash</span> <span class="o">+</span> <span class="s1">&#39;&quot; does not exist!&#39;</span><span class="p">);</span></div><div class='line' id='LC300'>				<span class="p">}</span></div><div class='line' id='LC301'><br/></div><div class='line' id='LC302'>				<span class="nx">modalElement</span><span class="p">.</span><span class="nx">index</span> <span class="o">=</span> <span class="p">(</span><span class="mi">1</span> <span class="o">*</span> <span class="nx">index</span><span class="p">);</span></div><div class='line' id='LC303'>			<span class="p">}</span></div><div class='line' id='LC304'><br/></div><div class='line' id='LC305'>			<span class="c1">// If the hash element exists</span></div><div class='line' id='LC306'>			<span class="k">if</span> <span class="p">(</span><span class="nx">modalElement</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC307'><br/></div><div class='line' id='LC308'>				<span class="c1">// Polyfill to prevent the default behavior of events</span></div><div class='line' id='LC309'>				<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span> <span class="o">||</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC310'>					<span class="nx">event</span><span class="p">.</span><span class="nx">returnValue</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC311'>				<span class="p">};</span></div><div class='line' id='LC312'><br/></div><div class='line' id='LC313'>				<span class="nx">event</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC314'><br/></div><div class='line' id='LC315'>				<span class="c1">// Get first element in selected element</span></div><div class='line' id='LC316'>				<span class="nx">modalChild</span> <span class="o">=</span> <span class="nx">modalElement</span><span class="p">.</span><span class="nx">children</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC317'><br/></div><div class='line' id='LC318'>				<span class="c1">// When we deal with a modal and body-class `has-overlay` is not set</span></div><div class='line' id='LC319'>				<span class="k">if</span> <span class="p">(</span><span class="nx">modalChild</span> <span class="o">&amp;&amp;</span> <span class="nx">modalChild</span><span class="p">.</span><span class="nx">className</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/modal-inner/</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC320'><br/></div><div class='line' id='LC321'>					<span class="c1">// Set an html class to prevent scrolling</span></div><div class='line' id='LC322'>					<span class="nx">modal</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span> <span class="s1">&#39;has-overlay&#39;</span><span class="p">);</span></div><div class='line' id='LC323'><br/></div><div class='line' id='LC324'>					<span class="c1">// Make previous element stackable if it is not the same modal</span></div><div class='line' id='LC325'>					<span class="nx">modal</span><span class="p">.</span><span class="nx">unsetActive</span><span class="p">(</span> <span class="o">!</span><span class="nx">modal</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="nx">modalElement</span><span class="p">,</span> <span class="s1">&#39;is-active&#39;</span><span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC326'><br/></div><div class='line' id='LC327'>					<span class="c1">// Mark the active element</span></div><div class='line' id='LC328'>					<span class="nx">modal</span><span class="p">.</span><span class="nx">setActive</span><span class="p">(</span><span class="nx">modalElement</span><span class="p">);</span></div><div class='line' id='LC329'>				<span class="p">}</span></div><div class='line' id='LC330'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC331'>				<span class="nx">modal</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">documentElement</span><span class="p">,</span> <span class="s1">&#39;has-overlay&#39;</span><span class="p">);</span></div><div class='line' id='LC332'><br/></div><div class='line' id='LC333'>				<span class="c1">// If activeElement is already defined, delete it</span></div><div class='line' id='LC334'>				<span class="nx">modal</span><span class="p">.</span><span class="nx">unsetActive</span><span class="p">();</span></div><div class='line' id='LC335'>			<span class="p">}</span></div><div class='line' id='LC336'><br/></div><div class='line' id='LC337'>			<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC338'>		<span class="p">},</span></div><div class='line' id='LC339'><br/></div><div class='line' id='LC340'>		<span class="cm">/**</span></div><div class='line' id='LC341'><span class="cm">		 * Listen to all relevant events</span></div><div class='line' id='LC342'><span class="cm">		 * @return {void}</span></div><div class='line' id='LC343'><span class="cm">		 */</span></div><div class='line' id='LC344'>		<span class="nx">init</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC345'><br/></div><div class='line' id='LC346'>			<span class="cm">/*</span></div><div class='line' id='LC347'><span class="cm">			 * Hide overlay when ESC is pressed</span></div><div class='line' id='LC348'><span class="cm">			 */</span></div><div class='line' id='LC349'>			<span class="k">this</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;keyup&#39;</span><span class="p">,</span> <span class="nb">document</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC350'>				<span class="kd">var</span> <span class="nx">hash</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="s1">&#39;#&#39;</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC351'><br/></div><div class='line' id='LC352'>				<span class="c1">// If hash is not set</span></div><div class='line' id='LC353'>				<span class="k">if</span> <span class="p">(</span><span class="nx">hash</span> <span class="o">===</span> <span class="s1">&#39;&#39;</span> <span class="o">||</span> <span class="nx">hash</span> <span class="o">===</span> <span class="s1">&#39;!&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC354'>					<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC355'>				<span class="p">}</span></div><div class='line' id='LC356'><br/></div><div class='line' id='LC357'>				<span class="c1">// If key ESC is pressed</span></div><div class='line' id='LC358'>				<span class="k">if</span> <span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">keyCode</span> <span class="o">===</span> <span class="mi">27</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC359'>					<span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span> <span class="o">=</span> <span class="s1">&#39;!&#39;</span><span class="p">;</span></div><div class='line' id='LC360'><br/></div><div class='line' id='LC361'>					<span class="k">if</span> <span class="p">(</span><span class="nx">modal</span><span class="p">.</span><span class="nx">lastActive</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC362'>						<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC363'>					<span class="p">}</span></div><div class='line' id='LC364'><br/></div><div class='line' id='LC365'>					<span class="c1">// Unfocus</span></div><div class='line' id='LC366'>					<span class="nx">modal</span><span class="p">.</span><span class="nx">removeFocus</span><span class="p">();</span></div><div class='line' id='LC367'>				<span class="p">}</span></div><div class='line' id='LC368'>			<span class="p">},</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC369'><br/></div><div class='line' id='LC370'>			<span class="cm">/*</span></div><div class='line' id='LC371'><span class="cm">			 * Trigger main handler on load and hashchange</span></div><div class='line' id='LC372'><span class="cm">			 */</span></div><div class='line' id='LC373'>			<span class="k">this</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;hashchange&#39;</span><span class="p">,</span> <span class="nb">window</span><span class="p">,</span> <span class="nx">modal</span><span class="p">.</span><span class="nx">mainHandler</span><span class="p">);</span></div><div class='line' id='LC374'>			<span class="k">this</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;load&#39;</span><span class="p">,</span> <span class="nb">window</span><span class="p">,</span> <span class="nx">modal</span><span class="p">.</span><span class="nx">mainHandler</span><span class="p">);</span></div><div class='line' id='LC375'>		<span class="p">}</span></div><div class='line' id='LC376'>	<span class="p">};</span></div><div class='line' id='LC377'><br/></div><div class='line' id='LC378'>	<span class="cm">/*</span></div><div class='line' id='LC379'><span class="cm">	 * AMD, module loader, global registration</span></div><div class='line' id='LC380'><span class="cm">	 */</span></div><div class='line' id='LC381'><br/></div><div class='line' id='LC382'>	<span class="c1">// Expose modal for loaders that implement the Node module pattern.</span></div><div class='line' id='LC383'>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">module</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">module</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC384'>		<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">modal</span><span class="p">;</span></div><div class='line' id='LC385'><br/></div><div class='line' id='LC386'>	<span class="c1">// Register as an AMD module</span></div><div class='line' id='LC387'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC388'>		<span class="nx">define</span><span class="p">(</span><span class="s1">&#39;CSSModal&#39;</span><span class="p">,</span> <span class="p">[],</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC389'><br/></div><div class='line' id='LC390'>			<span class="c1">// We use bean if the browser doesn&#39;t support CustomEvents</span></div><div class='line' id='LC391'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">global</span><span class="p">.</span><span class="nx">CustomEvent</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">global</span><span class="p">.</span><span class="nx">bean</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC392'>				<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;This browser doesn\&#39;t support CustomEvent - please include bean: https://github.com/fat/bean&#39;</span><span class="p">);</span></div><div class='line' id='LC393'>			<span class="p">}</span></div><div class='line' id='LC394'><br/></div><div class='line' id='LC395'>			<span class="nx">modal</span><span class="p">.</span><span class="nx">init</span><span class="p">();</span></div><div class='line' id='LC396'><br/></div><div class='line' id='LC397'>			<span class="k">return</span> <span class="nx">modal</span><span class="p">;</span></div><div class='line' id='LC398'>		<span class="p">});</span></div><div class='line' id='LC399'><br/></div><div class='line' id='LC400'>	<span class="c1">// Export CSSModal into global space</span></div><div class='line' id='LC401'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">global</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">global</span><span class="p">.</span><span class="nb">document</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC402'>		<span class="nx">global</span><span class="p">.</span><span class="nx">CSSModal</span> <span class="o">=</span> <span class="nx">modal</span><span class="p">;</span></div><div class='line' id='LC403'>		<span class="nx">modal</span><span class="p">.</span><span class="nx">init</span><span class="p">();</span></div><div class='line' id='LC404'>	<span class="p">}</span></div><div class='line' id='LC405'><br/></div><div class='line' id='LC406'><span class="p">}(</span><span class="nb">window</span><span class="p">));</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05356s from github-fe126-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-8c6e10f6700610e693b29e274318b3714523ca3e.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-8cb2cf90ade4ed9e5f018ba0309e9b3d0bf0c6db.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

