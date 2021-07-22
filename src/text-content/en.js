export default () => ({
  newsBanner: '🎉 RF 4.0 is out! <a href="www.google.com">Click here</a> for release notes',
  navbar: {
    items: [
      'Introduction',
      'Getting started',
      'Community',
      'Resources'
    ],
    dropdownName: 'Links',
    dropdown: [
      {
        name: 'Github',
        url: 'https://github.com/robotframework/robotframework',
        description: 'Source code + issues'
      },
      {
        name: 'Forum',
        url: 'http://forum.robotframework.org/',
        description: 'Discuss Robot Framework'
      },
      {
        name: 'Foundation',
        url: 'https://robotframework.org/foundation/',
        description: 'Support the development'
      },
      {
        name: 'Robocon',
        url: 'https://robocon.io/',
        description: 'Annual conference'
      },
      {
        name: 'Shop',
        url: 'https://reddyshop.co/robotframework/',
        description: 'Support the development'
      },
      {
        name: 'RPA',
        url: 'https://robotframework.org/rpa/',
        description: 'RPA stuff'
      }
    ]
  },
  introduction: {
    title: 'Introduction',
    body:
      `Robot Framework is a generic open source automation framework.
      It can be used for test automation and robotic process automation (RPA).<br><br>

      Robot Framework is actively supported, with many industry-leading companies using
      it in their software development.<br><br>

      Robot Framework is open and extensible and can be integrated with virtually any
      other tool to create powerful and flexible automation solutions. Being open source
      also means that Robot Framework is free to use without licensing costs. Robot Framework
      has easy syntax, utilizing human-readable keywords. Its capabilities can be extended
      by libraries implemented with Python or Java. The framework has a rich ecosystem
      around it, consisting of libraries and tools that are developed as separate projects.`,
    companies: [
      {
        name: 'ABB',
        description: 'ABB is using Robot Framework in software development for testing distribution automation related configuration tools, web interfaces and embedded devices.',
        imgName: 'ABB.svg'
      },
      {
        name: 'Cisco',
        description: 'Cisco’s Customer Experience (CX) supports the testing & validation of Cisco and 3rd party solutions deployed by our customers. This includes Solution Validation Services (SVS) delivered both on Cisco-premise and customer-premise.',
        imgName: 'Cisco.svg'
      },
      {
        name: 'Condé Nast',
        description: 'Condé Nast <a href="https://technology.condenast.com/story/automated-testing-qa-brand-sites-robot-framework">transformed their quality assurance for their brand sites,</a> such as Brides, Wired and Architectural Digest, from an entirely manual process to automated one with Robot Framework.',
        imgName: 'Condé_Nast.svg'
      },
      {
        name: 'KONE',
        description: 'KONE is widely using Robot Framework in software development for testing embedded systems in elevators and escalators.',
        imgName: 'Kone.svg'
      }
    ]
  },
  gettingStarted: {
    title: 'Getting Started',
    body:
      `Robot Framework is open and extensible and can be integrated with virtually any other
      tool to create powerful and flexible automation solutions. Being open source also means
      that Robot Framework is free to use without licensing costs. Robot Framework has easy
      syntax, utilizing human-readable keywords. Its capabilities can be extended by libraries
      implemented with Python or Java.`
  },
  community: {
    title: 'Community',
    body:
      `Robot Framework has a vibrant community around it with various online forums, annual
      RoboCon conference, and meetup groups around the world.`
  },
  resources: {
    title: 'Resources',
    body:
      'If you want to add your library here, make a PR.',
    content: [
      {
        name: 'Libraries',
        description: `Libraries provide the actual automation and testing capabilities to
        Robot Framework by providing keywords. Several standard libraries are bundled with
        the framework, and there are separately developed external libraries galore that
        can be installed based on your needs. Creating your own libraries is a breeze.`,
        items: [
          {
            name: 'AppiumLibrary',
            href: 'https://github.com/serhatbolsu/robotframework-appiumlibrary',
            description: 'Android and iOS testing. It uses Appium internally.',
            stars: 266,
            tags: ['mobile']
          },
          {
            name: 'ArchiveLibrary',
            href: 'https://github.com/bulkan/robotframework-archivelibrary',
            description: 'Handling zip- and tar-archives.',
            stars: 22,
            tags: ['zip']
          },
          {
            name: 'AutoItLibrary',
            href: 'https://github.com/nokia/robotframework-autoitlibrary',
            description: 'Windows GUI testing library that uses AutoIt freeware tool as a driver.',
            stars: 23,
            tags: ['windows', 'ui']
          },
          {
            name: 'AutoRecorder',
            href: 'https://github.com/sebastianciupinski/robotframework-autorecorder#readme',
            description: 'Allows automatically recording video for test/suites execution.',
            stars: 3,
            tags: ['ui']
          },
          {
            name: 'Browser Library',
            href: 'https://github.com/MarketSquare/robotframework-browser',
            description: 'A modern web testing library powered by <a href="https://playwright.dev" target="_blank">🎭 Playwright</a>.<br/>Aiming for 🚀 speed, ✅ reliability and 🔬 visibility.',
            stars: 156,
            tags: ['web', 'playwright']
          },
          {
            name: 'CncLibrary',
            href: 'https://github.com/eficode/robotframework-cnclibrary',
            description: 'Driving a CNC milling machine.',
            stars: 9,
            tags: ['rpa']
          },
          {
            name: 'ConfluentKafkaLibrary',
            href: 'https://github.com/robooo/robotframework-ConfluentKafkaLibrary',
            description: 'Python confluent kafka.'
          },
          {
            name: 'CURFLibrary',
            href: 'https://github.com/Openwide-Ingenierie/robotframework-can-uds-library',
            description: 'Testing CAN bus with support for ISO-TP and UDS.',
            stars: 21
          },
          {
            name: 'Database Library (Java)',
            href: 'https://github.com/Hi-Fi/robotframework-dblibrary',
            description: 'Java-based library for database testing. Usable with Jython. Available also at <a href="http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22robotframework-dblibrary%22" target="_blank">Maven central</a>.',
            tags: ['java']
          },
          {
            name: 'Database Library (Python)',
            href: 'https://franz-see.github.io/Robotframework-Database-Library/',
            description: 'Python based library for database testing. Works with any Python interpreter, including Jython.',
            tags: ['db']
          },
          {
            name: 'DataDriver Library',
            href: 'https://github.com/Snooz82/robotframework-datadriver',
            description: 'Data-Driven Testing with external 📤 data tables (csv, xls, xlsx, etc.). 🧬 Pairwise Combinatorial Testing support.',
            tags: ['db']
          },
          {
            name: 'Debug Library',
            href: 'https://github.com/xyb/robotframework-debuglibrary',
            description: 'A debug library for RobotFramework, which can be used as an interactive shell(REPL) also.'
          },
          {
            name: 'Diff Library',
            href: 'https://github.com/bulkan/robotframework-difflibrary',
            description: 'Diff two files together.'
          },
          {
            name: 'Django Library',
            href: 'https://pypi.python.org/pypi/robotframework-djangolibrary',
            description: 'Library for <a href="https://www.djangoproject.com/" target="_blank">Django</a>, a Python web framework.',
            tags: ['django']
          },
          {
            name: 'DoesIsLibrary',
            href: 'https://github.com/sebastianciupinski/robotframework-doesislibrary#readme',
            description: 'Autogenerated keywords like Is Something, Does Someting created form assertion keywords like Should Be, Should Not Be, etc'
          },
          {
            name: 'Eclipse Library',
            href: 'https://github.com/lcarbonn/robotframework-eclipselibrary/',
            description: 'Testing Eclipse RCP applications using SWT widgets.'
          },
          {
            name: 'Robotframework-faker',
            href: 'https://pypi.python.org/pypi/robotframework-faker/',
            description: 'Library for <a href="https://github.com/joke2k/faker" target="_blank">Faker</a>, a fake test data generator.'
          },
          {
            name: 'FTP library',
            href: 'https://github.com/kowalpy/Robot-Framework-FTP-Library',
            description: 'Testing and using FTP server with Robot Framework.',
            tags: ['ftp']
          },
          {
            name: 'HTTP RequestsLibrary (Python)',
            href: 'https://github.com/MarketSquare/robotframework-requests#readme',
            description: 'HTTP level testing using Python Requests internally.',
            tags: ['http']
          },
          {
            name: 'HttpRequestLibrary (Java)',
            href: 'https://github.com/Hi-Fi/robotframework-httprequestlibrary#readme',
            description: 'HTTP level testing using Apache HTTP client. Available also at <a href="http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22robotframework-httprequestlibrary%22" target="_blank">Maven central</a>.',
            tags: ['http', 'java']
          },
          {
            name: 'ImageHorizonLibrary',
            href: 'https://github.com/eficode/robotframework-imagehorizonlibrary#readme',
            description: 'Cross-platform, pure Python library for GUI automation based on image recognition.',
            tags: ['ui']
          },
          {
            name: 'JavaFXLibrary',
            href: 'https://github.com/eficode/JavaFXLibrary#readme',
            description: 'Testing JavaFX applications, based on <a href="https://github.com/TestFX/TestFX" target="_blank">TestFX</a>. Has also remote interface support.',
            tags: ['java']
          },
          {
            name: 'KiCadLibrary',
            href: 'https://github.com/madworx/robotframework-kicadlibrary#readme',
            description: 'Interacting with KiCad EDA designs.'
          },
          {
            name: 'ListenerLibrary',
            href: 'https://github.com/sebastianciupinski/robotframework-listenerlibrary#readme',
            description: 'Register keywords to run before/after other keywords and suites.'
          },
          {
            name: 'Mainframe3270 Library',
            href: 'https://github.com/Altran-PT-GDC/Robot-Framework-Mainframe-3270-Library/blob/master/README.md',
            description: 'Allows the creation of automated test scripts to test IBM Mainframe 3270.',
            tags: ['ibm']
          },
          {
            name: 'MQTT library',
            href: 'https://github.com/randomsync/robotframework-mqttlibrary#readme',
            description: 'Testing MQTT brokers and applications.',
            tags: ['iot']
          },
          {
            name: 'PuppeteerLibrary',
            href: 'https://qahive.github.io/robotframework-puppeteer.github.io/',
            description: 'Web testing using Puppeteer tool internally.',
            tags: ['web', 'ui']
          },
          {
            name: 'Qweb',
            href: 'https://github.com/qentinelqi/qweb',
            description: 'A modern web testing library focusing on making web testing and automation Easy 🎉 and maintainable 🧹 with its high level keyword design.',
            tags: ['web', 'ui']
          },
          {
            name: 'Rammbock',
            href: 'https://github.com/robotframework/Rammbock#readme',
            description: 'Generic network protocol test library that offers easy way to specify network packets and inspect the results of sent and received packets.',
            tags: ['http']
          },
          {
            name: 'RemoteSwingLibrary',
            href: 'https://github.com/robotframework/remoteswinglibrary',
            description: 'Testing and connecting to a java process and using SwingLibrary, especially Java Web Start applications.',
            tags: ['java']
          },
          {
            name: 'RESTinstance',
            href: 'https://github.com/asyrjasalo/RESTinstance/',
            description: 'Test library for HTTP JSON APIs.',
            tags: ['http']
          },
          {
            name: 'RPA framework',
            href: 'https://www.rpaframework.org/',
            description: 'Collection of open-source libraries and tools for Robotic Process Automation (RPA), designed to be used both with Robot Framework and Python.',
            tags: ['rpa']
          },
          {
            name: 'SapGuiLibrary',
            href: 'https://github.com/frankvanderkuur/robotframework-sapguilibrary/',
            description: 'Testing the SAPGUI client using the internal SAP Scripting Engine',
            tags: ['ui', 'sap']
          },
          {
            name: 'ScreenCapLibrary',
            href: 'https://github.com/mihaiparvu/ScreenCapLibrary',
            description: 'Taking screenshots and video recording. Similar functionality as Screenshot standard library, with some additional features.',
            tags: ['ui']
          },
          {
            name: 'SeleniumScreenshots',
            href: 'https://datakurre.github.io/robotframework-seleniumscreenshots/',
            description: 'Annotating and cropping screenshots taken with SeleniumLibrary.',
            tags: ['ui', 'selenium']
          },
          {
            name: 'SeleniumLibrary',
            href: 'http://github.com/robotframework/SeleniumLibrary/',
            description: 'Web testing library that uses popular Selenium tool internally.',
            tags: ['ui', 'web', 'selenium']
          },
          {
            name: 'SeleniumLibrary for Java',
            href: 'https://github.com/MarketSquare/robotframework-seleniumlibrary-java#readme',
            description: 'Java port of the SeleniumLibrary.',
            tags: ['java', 'selenium']
          },
          {
            name: 'SikuliLibrary',
            href: 'https://github.com/rainmanwy/robotframework-SikuliLibrary#readme',
            description: 'Provides keywords to test UI through <a href="http://sikulix.com/" target="_blank">Sikulix</a>. This library supports Python 2.x and 3.x.',
            tags: ['ui']
          },
          {
            name: 'SoapLibrary',
            href: 'https://github.com/Altran-PT-GDC/Robot-Framework-SOAP-Library',
            description: 'Designed for those who want to work with webservice automation as if they were using SoapUI, make a request through an XML file, and receive the response in another XML file.',
            tags: ['http']
          },
          {
            name: 'SSHLibrary',
            href: 'https://github.com/robotframework/SSHLibrary',
            description: 'Enables executing commands on remote machines over an SSH connection. Also supports transfering files using SFTP.',
            tags: ['ftp', 'ssh']
          },
          {
            name: 'SwingLibrary',
            href: 'https://github.com/robotframework/SwingLibrary/wiki',
            description: 'Testing Java applications with Swing GUI.',
            tags: ['java', 'ui']
          },
          {
            name: 'TestFX Library',
            href: 'https://github.com/Altran-PT-GDC/Robot-Framework-Test-FX-Library',
            description: 'Enables testing Java FX applications using the <a href="https://github.com/TestFX/TestFX" target="_blank">TestFX framework</a>. Has also remote interface support. <a href="https://github.com/weiqigao/Robot-Framework-Test-FX-Library" target="_blank">Maintained Fork...</a>',
            tags: ['java']
          },
          {
            name: 'TFTPLibrary',
            href: 'https://github.com/kowalpy/Robot-Framework-TFTP-Library',
            description: 'Interact over <a href="https://en.wikipedia.org/wiki/Trivial_File_Transfer_Protocol" target="_blank">Trivial File Transfer Portocol</a>.',
            tags: ['ftp']
          },
          {
            name: 'WhiteLibrary',
            href: 'https://github.com/Omenia/robotframework-whitelibrary',
            description: 'Automating Windows GUI. Based on White framework, supported technologies include Win32, WinForms, and WPF.',
            tags: ['ui']
          },
          {
            name: 'WADLibrary',
            href: 'https://github.com/Adwisit/WADLibrary',
            description: 'Application testing library that utilizes Win App Driver.'
          },
          {
            name: 'Zoomba Library',
            href: 'https://github.com/Accruent/robotframework-zoomba',
            description: 'Extends features in many popular tools for GUI, Rest API, Soap API, Mobile, and Windows (WinAppDriver) automation. An ideal all-in-one toolkit for new or existing Robot Framework projects.',
            tags: ['ui', 'http']
          },
          {
            name: 'Builtin',
            href: 'http://robotframework.org/robotframework/latest/libraries/BuiltIn.html',
            description: 'Provides a set of often needed generic keywords. Always automatically available without imports.',
            tags: ['built-in']
          },
          {
            name: 'Collections',
            href: 'http://robotframework.org/robotframework/latest/libraries/Collections.html',
            description: 'Provides a set of keywords for handling Python lists and dictionaries.',
            tags: ['built-in']
          },
          {
            name: 'DateTime',
            href: 'http://robotframework.org/robotframework/latest/libraries/DateTime.html',
            description: 'Library for date and time conversions.',
            tags: ['built-in']
          },
          {
            name: 'Dialogs',
            href: 'http://robotframework.org/robotframework/latest/libraries/Dialogs.html',
            description: 'Provides means for pausing the execution and getting input from users.',
            tags: ['built-in']
          },
          {
            name: 'OperatingSystem',
            href: 'http://robotframework.org/robotframework/latest/libraries/OperatingSystem.html',
            description: 'Enables various operating system related tasks to be performed in the system where Robot Framework is running.',
            tags: ['built-in']
          },
          {
            name: 'Process',
            href: 'http://robotframework.org/robotframework/latest/libraries/Process.html',
            description: 'Library for running processes in the system.',
            tags: ['built-in']
          },
          {
            name: 'Remote',
            href: 'https://github.com/robotframework/RemoteInterface',
            description: 'Special library acting as a proxy between Robot Framework and libraries elsewhere. Actual libraries can be running on different machines and be implemented using any programming language supporting XML-RPC protocol.',
            tags: ['built-in']
          },
          {
            name: 'Screenshot',
            href: 'http://robotframework.org/robotframework/latest/libraries/Screenshot.html',
            description: 'Provides keywords to capture screenshots of the desktop.',
            tags: ['built-in']
          },
          {
            name: 'String',
            href: 'http://robotframework.org/robotframework/latest/libraries/String.html',
            description: 'Library for generating, modifying and verifying strings.',
            tags: ['built-in']
          },
          {
            name: 'Telnet',
            href: 'http://robotframework.org/robotframework/latest/libraries/Telnet.html',
            description: 'Makes it possible to connect to Telnet servers and execute commands on the opened connections.',
            tags: ['built-in']
          },
          {
            name: 'XML',
            href: 'http://robotframework.org/robotframework/latest/libraries/XML.html',
            description: 'Library for generating, modifying and verifying XML files.',
            tags: ['built-in']
          },
          {
            name: 'Creating test libraries',
            href: 'http://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html#creating-test-libraries',
            text: 'Creating test libraries section in Robot Framework User Guide.',
            tags: ['guide']
          },
          {
            name: 'Python Library Core',
            href: 'https://github.com/robotframework/PythonLibCore',
            text: 'Tools to ease creating larger test libraries for Robot Framework using Python.',
            tags: ['tools']
          },
          {
            name: 'JavalibCore',
            href: 'https://github.com/robotframework/JavalibCore/wiki',
            text: 'Base for implementing larger Java based test libraries for Robot Framework.',
            tags: ['java']
          },
          {
            name: 'RemoteApplications',
            href: 'https://github.com/robotframework/RemoteApplications',
            text: 'Special test library for launching Java applications on a separate JVM and taking other libraries into use on them.',
            tags: ['java']
          },
          {
            name: 'Plone.app.robotframework',
            href: 'https://pypi.python.org/pypi/plone.app.robotframework',
            text: 'Provides resources and tools for writing functional Selenium tests for Plone CMS and its add-ons.',
            tags: ['tools']
          }
        ]
      },
      {
        name: 'Tools',
        description: `Supporting tools ease automation: editing, running, building and so on.
        Most of these tools are developed as separate projects, but some are built into the framework itself.`,
        items: [
          {
            name: 'Rebot',
            description: 'Tool for generating logs and reports based on XML outputs and for combining multiple outputs together.',
            tags: ['built-in']
          }
        ]
      },
      {
        name: 'Learning',
        description: `Want to get started? Looking for a way to do things? Here are the most
        important documentation resources needed to work with Robot Framework. Notice that
        individual libraries and tools in the ecosystem have their own documentation that
        is typically accessed via their project pages.`,
        items: [
          {
            name: 'Installation Instructions',
            description: 'If you are familiar with Python and pip, just run pip install robotframework. Notice that external libraries and tools need to be installed separately.',
            tags: ['getting started']
          },
          {
            name: 'User Guide',
            description: 'Reference manual explaining all Robot Framework features in detail.',
            tags: ['documentation']
          },
          {
            name: 'Public API',
            description: 'Public API for writing your own tools against Robot Framework.',
            tags: ['documentation']
          },
          {
            name: 'Introduction Slides',
            description: 'Generic Robot Framework introduction slides.',
            tags: ['getting started']
          },
          {
            name: 'How to write good test cases',
            description: 'Guidelines for writing good test cases using Robot Framework.',
            tags: ['getting started']
          },
          {
            name: 'RPA tutorials',
            description: 'Robocorp RPA tutorials, courses, and guidelines',
            tags: ['getting started', 'rpa']
          },
          {
            name: 'Quick Start Guide',
            description: 'Introduces the most important features of Robot Framework and acts as an executable demo.',
            tags: ['getting started']
          },
          {
            name: 'Dos And Don\'ts',
            description: 'Slide set loosely based on \'How to write good test cases\' guidelines.',
            tags: ['getting started']
          },
          {
            name: 'Web Demo',
            description: 'Demonstrates how to create tests and higher level keywords. The system under test is a simple web page that is tested using SeleniumLibrary.',
            tags: ['demo']
          },
          {
            name: 'Robot Demo',
            description: 'Demonstrates how to create tests and test libraries. The system under test is a simple calculator that is tested using a custom library.',
            tags: ['demo']
          },
          {
            name: 'ATDD with Robot Framework',
            description: 'How to use Robot Framework for Acceptance Test Driven Development (ATDD) a.k.a. Specification by Example.',
            tags: ['demo']
          },
          {
            name: 'Using C with Robot Framework',
            description: 'This simple example demonstrates how to use C language from Robot Framework test libraries.',
            tags: ['demo']
          },
          {
            name: 'Robot Framework RPA example projects',
            description: 'A library of sample RPA projects and code snippets built on Robot Framework',
            tags: ['demo', 'rpa']
          },
          {
            name: 'Remote interface demo',
            description: 'Example demonstrates how to use Robot Framework\'s <a href="https://github.com/robotframework/RemoteInterface">Remote interface</a> to call test libraries written in any programming language.',
            tags: ['demo']
          },
          {
            name: 'Robot Framework katas',
            description: 'Series of exercises and examples how to get started with test automation. No prior knowledge of test automation required.',
            tags: ['demo']
          }
        ]
      }
    ]
  }
})
