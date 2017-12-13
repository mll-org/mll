(function () {
    'use strict';

    angular
        .module('MLLabApp')
        .controller('InviteController', InviteFormController);

    function InviteFormController($scope, InviteService) {

        var musicianInvitationBody = "I would like to invite you to participate in an exciting new music project at Northeastern University, the first beta-test phase of the launch of NU’s Media Licensing Laboratory (ML-Lab)." + "\n" +
            "I am asking you to join this effort, and upload your music onto our ML-LAB Platform so we can create a prototype music library solely for educational and research purposes. This will be a great way to introduce your music to NU students." + "\n" +
            "We are also anxious to get your feedback about your experience with the ML-LAB Platform, so I ask that you send any feedback and bug reports promptly through the feedback window so that we can use your input to improve the process." + "\n" + "Our long term goal is to establish a student-run music licensing program so students can place great independent music in movies, television shows, video games and commercials. However, we’re not even close to launching the Licensing Program, so for now, we’re just trying to gather some great music into our library for NU students to work with." + "\n" +
            "Before we actually launch the Music Licensing Program, we’ll ask you if you want to be included. Participation in the Music Licensing Program will be voluntary and non-exclusive and you will retain all rights in your music. If you do decide to participate in the Music Licensing Program, you will be free to withdraw at any time." + "\n" +
            "Please click on the link below to participate in the ML-Lab and upload your music into our Library. Please let me know if you have any comments or questions and don’t forget to give us your feedback about your experience with the Platform." + "\n" + "Thanks,  Admin" + "\n" + "https://guarded-caverns-60590.herokuapp.com/#!/register"
			+ "\n" + "Please note that the email ID and full name should match the values that were used for the invitation";
        this.showSuccess = false;

        this.types = [
            { label: 'AR User', value: 'user' },
            { label: 'Musician', value: 'musician' }
        ];

        this.showMailContent = () => {
            this.showMailContentFlag = true;
            $scope.firstName = $scope.email.name.substr(0, $scope.email.name.indexOf(' '));
            this.messageBody = "Dear " + $scope.firstName + ",\n" + musicianInvitationBody;
            $scope.email.firstname = $scope.email.name.substr(0, $scope.email.name.indexOf(' '));
        }

        this.invite = () => {
            var user = {
                name : $scope.email.name,
                email : $scope.email.to
            };

            InviteService
                .addUserToDB(user);
            /*$http.post('/email', $scope.email)
                .then(function () {
                    console.log('tried to mail');
                });*/
            this.showSuccess = true;
        }

        /*app.post('/email', function(req, res) {

        });*/
    }
})();