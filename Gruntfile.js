module.exports = function(grunt) {

    // Project configuration.
  grunt.initConfig({
    exec: {
        // run_builder: 'yarn next-build && yarn export'
        run_builder: 'yarn build'
    },  
    aws: grunt.file.readJSON('credentials/aws-keys.json'),
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>', 
        secretAccessKey: '<%= aws.AWSSecretKey %>',
        region: 'sa-east-1',
        uploadConcurrency: 5
      },
      production: {
        options: {
            bucket:'<%= aws.AWSBucketId %>' },
        files: [
          // {expand: true, cwd: 'out/', src: ['**/*'], dest: '/', params: {CacheControl: 'no-cache'}}
          {expand: true, cwd: 'build/', src: ['**/*'], dest: '/', params: {CacheControl: 'no-cache'}}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-aws-s3'),
  grunt.loadNpmTasks('grunt-exec');
  // Default task(s).
  grunt.registerTask('default', ['exec','aws_s3']);
};