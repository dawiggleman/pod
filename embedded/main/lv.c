/* Low Voltage Main File */

/* Similar to last year I feel that the main loop
 * should be in it's own file. This one will be the 
 * main loop for the Low Voltage PCB */

#include <stdio.h>
#include <unistd.h>

int main( int argc, const char* argv[] ){

	while( 1 ){
		printf("Low Voltage PCB Loop!\r\n");
		sleep(3);
	}

}
