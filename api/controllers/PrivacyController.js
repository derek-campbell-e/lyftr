/**
 * PrivacyController
 *
 * @description :: Server-side logic for managing privacies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res){
    let locals = {layout: 'layout'};
    let privacyPoints = {
      'yourData': {
        title: 'Your data is yours!',
        content: `Anything you provide for this car trip is YOURS. You'll get a link at the end of the ride to download it all when you're finished!`
      },
      'tellUs': {
        title: 'You tell us what to keep',
        content: 'Decide either with privacy defaults, or on question-by-question basis what you want recorded / saved.'
      },
      'youDecide': {
        title: 'You decide who you are',
        content: 'Along with your free choice in declining to answer a question, you can change how you want to be referred to as come time for public display'
      },
      'notForSale': {
        title: 'Your information is not for sale',
        content: 'Who you are and your responses to questions are not for sale. This is done for free, entertainment, and educational purposes.'
      },
      'step1': {
        title: `How to secure your data STEP ONE: DON'T ASK`,
        content: `We won't store private and important information like address, email, phone number, etc. because you won't be asked for it! Everything you provide can and SHOULD be taken as anonymously as possible`
      },
      'step2': {
        title: 'How to secure your data STEP TWO: DONT TELL',
        content: `Your content never enters the digital world without encryption. Strong encryption. In fact, it's best practices for security standards. Only YOU have the password to access the raw information.`
      }
    };
    return res.view('privacy/policy', {layout: 'layout', privacyPoints: privacyPoints});
  },
  setup: function(req, res){
    let locals = {layout: 'layout'};
    let privacyPoints = {
      'yourData': {
        title: 'Your data is yours!',
        content: `Anything you provide for this car trip is YOURS. You'll get a link at the end of the ride to download it all when you're finished!`
      },
      'tellUs': {
        title: 'You tell us what to keep',
        content: 'Decide either with privacy defaults, or on question-by-question basis what you want recorded / saved.'
      },
      'youDecide': {
        title: 'You decide who you are',
        content: 'Along with your free choice in declining to answer a question, you can change how you want to be referred to as come time for public display'
      },
      'notForSale': {
        title: 'Your information is not for sale',
        content: 'Who you are and your responses to questions are not for sale. This is done for free, entertainment, and educational purposes.'
      },
      'step1': {
        title: `How to secure your data STEP ONE: DON'T ASK`,
        content: `We won't store private and important information like address, email, phone number, etc. because you won't be asked for it! Everything you provide can and SHOULD be taken as anonymously as possible`
      },
      'step2': {
        title: 'How to secure your data STEP TWO: DONT TELL',
        content: `Your content never enters the digital world without encryption. Strong encryption. In fact, it's best practices for security standards. Only YOU have the password to access the raw information.`
      }
    };
    return res.view('privacy/setup', {layout: 'layout', privacyPoints: privacyPoints});
  }
};

