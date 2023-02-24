Feature: Create a new Video
    In order to have videos in the platform
    As a user with admin permissions
    I want to create a new video


Scenario: A valid non existing video
    Given I send a POST request to "/videos" with body:
        """
        {
            "id": "asdacd76-9ad9a8sd9-sd-098asdff-asd8as98",
            "name": "The best video",
            "duration": "5 hours"
        }
        """

        Then the response status code should be 201
        And the response should be empty